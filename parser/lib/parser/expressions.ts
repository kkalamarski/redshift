import { BinaryExpression, ExpressionStatement } from "./ast"
import { parseAnyType } from "./tokens"
import { TokenType } from "../lexer"

export const parseExpression = buffer => {
  const [_left, op, _right, ...rest] = buffer
  let left = parseAnyType(_left)

  if (op) {
    let operator = op[1]
    let right = parseAnyType(_right)

    if (op[0] === TokenType.StringConcat) {
      operator = "+"
    }

    return new ExpressionStatement(new BinaryExpression(left, operator, right))
  } else {
    return new ExpressionStatement(left)
  }
}
