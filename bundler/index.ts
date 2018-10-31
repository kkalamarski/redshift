import fs from "fs"
import path from "path"
import { getAstFromCode, compileAstToCode } from "../parser/redshift"
import traverse from "babel-traverse"
import * as babylon from "babylon"
import * as babel from "@babel/core"
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
