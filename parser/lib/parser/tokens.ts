import { Token, TokenType } from "../lexer"
import {
  MemberExpression,
  Identifier,
  StringLiteral,
  NumberLiteral
} from "./ast"

export const parseMemberExpression = (token: Token) => {
  const [mod, fn] = token[1].split(".")

  return new MemberExpression(new Identifier(mod), new Identifier(fn))
}

export const parseAnyType = (token: Token) => {
  const [type, value] = token

  if (type === TokenType.Identifier) return new Identifier(value)
  if (type === TokenType.String) return new StringLiteral(value)
  if (type === TokenType.Number) return new NumberLiteral(value)
  if (type === TokenType.MemberIdentifier) return parseMemberExpression(token)

  throw new SyntaxError(
    `Invalid token "${value}" of type "${type}" used as a part of expression.`
  )
}

export const parseIdentifierOrNumber = (token: Token) => {
  const [type, value, position] = token
  if (type === TokenType.Number) return new NumberLiteral(value)
  if (type === TokenType.Identifier) return new Identifier(value)

  throw new SyntaxError(
    `Invalid token "${value}" of type "${type}" used as a part of expression at ${position}.`
  )
}
