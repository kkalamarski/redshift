const Lexer = require("./lib/lexer")
const parse = require("./lib/parser")
const babel = require("@babel/core")

const compile = (redshift, evaluate, compileToAST, es5) => {
  const lexer = new Lexer()
  lexer.tokenize(redshift)

  const ast = parse(lexer.tokens)

  if (compileToAST) {
    return ast
  }

  const { code } = babel.transformFromAst(ast, null, {
    presets: es5 ? ["@babel/env"] : []
  })

  if (evaluate) {
    return eval(code)
  }

  return code
}

module.exports = compile
