const Lexer = require("./lib/Lexer")
const Parser = require("./lib/Parser")
const babel = require("@babel/core")

const program = `
def sum(a) do
    a + a
end

def sum(a, b) do
    a + b
end

def div(a, b) do
    a / b
end

sum(2)
sum(-10, 6)
`
const compile = (exscript, evaluate) => {
  const lexer = new Lexer()
  const parser = new Parser()
  lexer.tokenize(exscript)

  const ast = parser.parse(lexer.tokens)
  const { code } = babel.transformFromAst(ast, null, {})

  if (evaluate) {
    return eval(code)
  }

  return code
}

module.exports = compile
