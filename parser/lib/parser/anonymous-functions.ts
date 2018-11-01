import {
  ExpressionStatement,
  ArrowFunctionExpression,
  Block,
  Identifier
} from "./ast"
import { getFunctionNameAndParams } from "./functions"
import { parseExpression } from "./expressions"

export const buildAnonymousFunction = buffer => {
  const [declaration, op, ...body] = buffer
  const { name, params } = getFunctionNameAndParams(declaration[1])

  if (name !== "fn")
    throw new SyntaxError(
      `Expected anonymous function assignment with keyword fn but got "${name}"`
    )

  return new ExpressionStatement(
    new ArrowFunctionExpression(
      null,
      params.map(param => new Identifier(param)),
      parseExpression(body)
    )
  )
}
