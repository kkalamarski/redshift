import { BinaryExpression } from "./ast"
import { parseAnyType } from "../parser"

export const parseExpression = buffer => {
  const [_left, op, _right, ...rest] = buffer

  let left = parseAnyType(_left)

  if (op) {
    let right = parseAnyType(_right)
    return new BinaryExpression(left, op[1], right)
  } else {
    return left
  }
}
