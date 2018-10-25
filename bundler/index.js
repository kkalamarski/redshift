const fs = require("fs")
const path = require("path")
const redshift = require("../parser/redshift")
const traverse = require("babel-traverse").default

function createAsset(filename) {
  const absolutePath = path.join(process.cwd(), filename)
  const content = fs.readFileSync(absolutePath, "utf-8")
  const ast = redshift(content, false, true)

  traverse(ast, {
    ImportDeclaration: node => {
      console.log(node)
    }
  })
  //   console.log(ast)
}

createAsset("examples/HelloWorld.ex")

module.exports = createAsset
