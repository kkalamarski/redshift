import {
  ExpressionStatement,
  ArrowFunctionExpression,
  Block,
  Identifier
} from "./ast"
import { buildFunctionCall } from "./functions"
import { parseExpression } from "./expressions"
import { TokenType, Token } from "../lexer"
import { isOperator } from "./../lexer"

export const getParamsFromBuffer = (buffer: Token[]) => {
  const close = buffer.findIndex(token => token[0] === TokenType.ParamsClose)
  return buffer.slice(0, close).filter(param => param[0] !== TokenType.Comma)
}

export const getBodyFromBuffer = (buffer: Token[]) => {
  const arrow = buffer.findIndex(token => token[0] === TokenType.ThinArrow)
  return buffer.slice(arrow + 1)
}

export const buildAnonymousFunction = (buffer: Token[]) => {
  const [fn, open, ...rest] = buffer
  let id = 0

  if (fn[0] !== TokenType.Fn)
    throw new SyntaxError(
      `Expected anonymous function assignment with keyword fn but got "${
        fn[1]
      }"`
    )
  if (open[0] !== TokenType.ParamsOpen) throw new SyntaxError()

  const params = getParamsFromBuffer(rest)
  const body = getBodyFromBuffer(rest)

  return new ExpressionStatement(
    new ArrowFunctionExpression(
      null,
      params.map(param => new Identifier(param[1])),
      parseFunctionFromBuffer(body)
    )
  )
}

export const parseFunctionFromBuffer = (buffer: Token[]) => {
  const [left, op, ...rest] = buffer

  if (op && op[0] === TokenType.ParamsOpen) {
    const params = getParamsFromBuffer(rest)
    return buildFunctionCall(left[1], params)
  } else {
    return parseExpression(buffer)
  }
}
