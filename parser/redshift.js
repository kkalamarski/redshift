const Lexer = require("./lib/lexer")
const Parser = require("./lib/parser")
const babel = require("@babel/core")

const compile = (redshift, evaluate, compileToAST) => {
  const lexer = new Lexer()
  const parser = new Parser()
  lexer.tokenize(redshift)

  const ast = parser.parse(lexer.tokens)

  if (compileToAST) {
    return ast
  }

  const { code } = babel.transformFromAst(ast, null, {})

  if (evaluate) {
    return eval(code)
  }

  return code
}

module.exports = compile
