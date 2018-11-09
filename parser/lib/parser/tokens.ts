import { Token, TokenType } from "../lexer"
import {
  MemberExpression,
  Identifier,
  StringLiteral,
  NumberLiteral
} from "./ast"

export const parseAnyType = (token: Token) => {
  try {
    const [type, value] = token

    if (type === TokenType.Identifier) return new Identifier(value)
    if (type === TokenType.String) return new StringLiteral(value)
    if (type === TokenType.Number) return new NumberLiteral(value)

    throw new SyntaxError(
      `Invalid token "${value}" of type "${type}" used as a part of expression.`
    )
  } catch (e) {
    if (e instanceof SyntaxError) throw e
    else
      throw new SyntaxError(`Expected token but got ${JSON.stringify(token)}`)
  }
}

export const parseIdentifierOrNumber = (token: Token) => {
  const [type, value, position] = token
  if (type === TokenType.Number) return new NumberLiteral(value)
  if (type === TokenType.Identifier) return new Identifier(value)

  throw new SyntaxError(
    `Invalid token "${value}" of type "${type}" used as a part of expression at ${position}.`
  )
}
