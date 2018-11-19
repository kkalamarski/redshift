import { Token, isValidParameter, TokenType } from "../lexer"
import { Identifier, ObjectExpression, Property } from "./ast"
import { parseAnyType } from "./tokens"

const getProperties = buffer => {
  const [name, arrow, value, comma, ...rest] = buffer
  const property = new Property(new Identifier(name[1]), parseAnyType(value))

  if (rest.length > 0) {
    return [].concat(property, getProperties(rest))
  } else {
    return [property]
  }
}

export const parseMap = (buffer: Token[]): ObjectExpression => {
  const [_map, ...tail] = buffer

  const properties = getProperties(tail.filter(x => x[0] !== TokenType.Newline))
  return new ObjectExpression(properties)
}
