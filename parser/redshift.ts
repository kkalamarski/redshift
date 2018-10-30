import Lexer from "./lib/lexer"
import parse from "./lib/parser"
import * as babel from "@babel/core"

const compile = (
  redshiftCode: string,
  evaluate?: boolean,
  compileToAST?: boolean,
  es5?: boolean
) => {
  const lexer = new Lexer()
  lexer.tokenize(redshiftCode)

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

export default compile
