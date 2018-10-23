const Lexer = require("./lib/Lexer")
const Parser = require("./lib/Parser")
const babel = require("@babel/core")

const compile = (redshift, evaluate) => {
  const lexer = new Lexer()
  const parser = new Parser()
  lexer.tokenize(redshift)

  const ast = parser.parse(lexer.tokens)
  const { code } = babel.transformFromAst(ast, null, {})

  if (evaluate) {
    return eval(code)
  }

  return code
}

module.exports = compile