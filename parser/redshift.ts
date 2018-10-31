import Lexer from "./lib/lexer"
import parse from "./lib/parser"
import * as babel from "@babel/core"

export const getAstFromCode = (redshiftCode: string) => {
  const lexer = new Lexer()
  lexer.tokenize(redshiftCode)

  return parse(lexer.tokens)
}

export const compileAstToCode = (ast: any, es5?: boolean) => {
  const { code } = babel.transformFromAst(ast, null, {
    presets: es5 ? ["@babel/env"] : []
  })

  return code
}

export const compile = (redshiftCode: string, es5?: boolean) => {
  const ast = getAstFromCode(redshiftCode)
  return compileAstToCode(ast, es5)
}

export const evaluate = (redshiftCode: string, es5?: boolean) => {
  const jsCode = compile(redshiftCode, es5)

  return eval(jsCode)
}
