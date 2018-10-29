const fs = require("fs")
const path = require("path")
const redshift = require("../parser/redshift")
const traverse = require("babel-traverse").default
const babylon = require("babylon")
const babel = require("@babel/core")
const chalk = require("chalk")

module.exports = entryFile => {
  console.time(chalk.green("Code bundled in"))
  let ID = 0

  function createAsset(filename, isJavaScript) {
    const content = fs.readFileSync(filename, "utf-8")
    let ast

    if (isJavaScript) {
      ast = babylon.parse(content, {
        sourceType: "module"
      })
    } else {
      ast = redshift(content, false, true)
    }

    let dependencies = []

    traverse(ast, {
      ImportDeclaration: ({ node }) => {
        dependencies.push(node.source.value)
      }
    })

    const id = ID++

    const { code } = babel.transformFromAst(ast, null, {
      presets: ["@babel/env"]
    })

    return {
      id,
      filename,
      dependencies,
      code
    }
  }

  function createGraph(entry) {
    const mainAsset = createAsset(entry)
    const queue = [mainAsset]

    for (const asset of queue) {
      const dirname = path.dirname(asset.filename)

      asset.mapping = {}

      asset.dependencies.forEach(dep => {
        let child
        if (dep.includes("core")) {
          absolutePath = path.join(__dirname, "../", dep + ".js")
          child = createAsset(absolutePath, true)
        } else if (dep[0] === ".") {
          absolutePath = path.join(dirname, dep)
          child = createAsset(absolutePath)
        } else {
          const modPath = path.join(__dirname, "../node_modules", dep)
          const pkg = require(path.join(modPath, "package.json"))
          let filename = pkg.main

          if (!filename.includes(".js")) {
            filename += ".js"
          }

          absolutePath = path.join(__dirname, "../node_modules", dep, filename)
          child = createAsset(absolutePath, true)
        }

        asset.mapping[dep] = child.id
        queue.push(child)
      })
    }

    return queue
  }

  function bundle(graph) {
    let modules = ""

    graph.forEach(mod => {
      console.log(chalk.green(`[${mod.id}]:`), mod.filename)
      modules += `${mod.id}: [
        function(require, module, exports) { 
            ${mod.code} 
        },
        ${JSON.stringify(mod.mapping)}
    ],`
    })

    const result = `
    (function(modules) {

        function require(id) {
            var mod = modules[id];
            var fn = mod[0];
            var map = mod[1];

            var module = { exports: {} };

            function localRequire(relativePath) {
                return require(map[relativePath]);
            }

            fn(localRequire, module, module.exports);

            return module.exports
        }

        require(0)

    })({${modules}})
  `

    return result
  }

  const graph = createGraph(entryFile)
  const result = bundle(graph)
  console.timeEnd(chalk.green("Code bundled in"))
  return result
}
