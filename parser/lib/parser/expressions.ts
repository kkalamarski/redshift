import {
  BinaryExpression,
  CallExpression,
  MemberExpression,
  ArrayExpression,
  Identifier
} from "./ast"
import { parseAnyType } from "./tokens"
import { TokenType } from "../lexer"

export const parseBuffer = buffer => {
  const [_left, op, _right, ...rest] = buffer
  let left = parseAnyType(_left)

  if (op) {
    let operator = op[1]
    let right = parseAnyType(_right)

    if (rest) {
      right = parseBuffer([_right, ...rest])
    }

    if (op[0] === TokenType.StringConcat) {
      operator = "+"
    } else if (op[0] === TokenType.ListConcat) {
      return new CallExpression(
        new MemberExpression(new ArrayExpression([]), new Identifier("concat")),
        [left, right]
      )
    }

    return new BinaryExpression(left, operator, right)
  } else {
    return left
  }
}

export const parseExpression = buffer => {
  return parseBuffer(buffer)
}
