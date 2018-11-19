import * as babel from "@babel/core"
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts"
import { RedshiftLexer } from "./parser/RedshiftLexer"
import { RedshiftParser } from "./parser/RedshiftParser"
import RedshiftASTGenerator from "./parser/RedshiftASTGenerator"

export const getAstFromCode = (redshiftCode: string) => {
  let inputStream = new ANTLRInputStream(redshiftCode)
  let lexer = new RedshiftLexer(inputStream)
  let tokenStream = new CommonTokenStream(lexer)
  let parser = new RedshiftParser(tokenStream)
  let cst = parser.program()

  let visitor = new RedshiftASTGenerator()

  return visitor.visit(cst)
}

export const compileAstToCode = (ast: any, es5: boolean = true) => {
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
