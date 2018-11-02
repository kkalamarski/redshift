import { Token, isValidParameter } from "../lexer"
import { ArrayExpression } from "./ast"
import { parseAnyType } from "./tokens"

export const parseList = (buffer: Token[]): ArrayExpression => {
  const elements = buffer.filter(token => isValidParameter(token))
  return new ArrayExpression(elements.map(token => parseAnyType(token)))
}
