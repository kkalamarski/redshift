import fs from "fs"
import path from "path"
import { getAstFromCode, compileAstToCode } from "@redshift/core"
import traverse from "babel-traverse"
import * as babylon from "babylon"
import chalk from "chalk"

interface Asset {
  id: number
  filename: string
  dependencies: string[]
  code: string
  mapping?: any
}

export default (entryFile: string) => {
  console.time(chalk.green("Code bundled in"))
  let ID = 0

  function createAsset(filename: string, isJavaScript?: boolean): Asset {
    const content = fs.readFileSync(filename, "utf-8")
    let ast

    if (isJavaScript) {
      ast = babylon.parse(content, {
        sourceType: "module"
      })
    } else {
      ast = getAstFromCode(content)
    }

    let dependencies = []

    traverse(ast, {
      ImportDeclaration: ({ node }) => {
        dependencies.push(node.source.value)
      },
      CallExpression: ({ node }) => {
        if (node.callee.name === "require") {
          dependencies.push(node.arguments[0].value)
        }
      }
    })

    const id = ID++

    const code = compileAstToCode(ast, true)

    return {
      id,
      filename,
      dependencies,
      code
    }
  }

  function createGraph(entry: string) {
    const mainAsset: Asset = createAsset(entry)
    const queue = [mainAsset]
    let absolutePath

    for (const asset of queue) {
      const dirname = path.dirname(asset.filename)

      asset.mapping = {}

      asset.dependencies.forEach(dep => {
        let child
        if (dep.includes("core")) {
          absolutePath = path.join(__dirname, "../", dep + ".js")
        } else if (dep[0] === ".") {
          absolutePath = path.join(dirname, dep)

          if (
            !fs.existsSync(absolutePath) ||
            fs.lstatSync(absolutePath).isDirectory()
          ) {
            if (
              path.extname(absolutePath) !== ".rh" ||
              path.extname(absolutePath) !== ".js"
            ) {
              if (fs.existsSync(`${absolutePath}.rh`)) absolutePath += ".rh"
              else if (fs.existsSync(`${absolutePath}.js`))
                absolutePath += ".js"
              else if (fs.existsSync(`${absolutePath}/index.js`))
                absolutePath += "/index.js"
              else throw new Error(`File ${absolutePath} couldnt be found!`)
            }
          }
        } else {
          const modPath = path.join(process.cwd(), "node_modules", dep)
          const pkg = require(path.join(modPath, "package.json"))
          let filename = pkg.main

          if (!filename.includes(".js")) {
            filename += ".js"
          }

          absolutePath = path.join(process.cwd(), "node_modules", dep, filename)
        }

        let existingModule = queue.find(item => item.filename === absolutePath)
        if (existingModule) child = existingModule
        else
          child = createAsset(
            absolutePath,
            path.extname(absolutePath) === ".js"
          )

        asset.mapping[dep] = child.id

        if (!existingModule) queue.push(child)
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
    global = typeof global == "undefined"? {} : global;
    process = { env: { NODE_ENV: 'dev' } };
    
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
