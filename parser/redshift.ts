import Parser from "./lib/parser"
import { tokenize } from "./lib/lexer"
import * as babel from "@babel/core"

export const getAstFromCode = (redshiftCode: string) => {
  const tokens = tokenize(redshiftCode)
  const parser = new Parser(tokens)

  return parser.parse()
}

export const compileAstToCode = (ast: any, es5?: boolean) => {
  const { code } = babel.transformFromAst(
    ast,
    {
      minified: true,
      parserOpts: { allowReturnOutsideFunction: true }
    },
    {
      presets: es5 ? ["@babel/env"] : []
    }
  )

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
