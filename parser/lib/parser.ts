import {
  BinaryExpression,
  Block,
  CallExpression,
  ExpressionStatement,
  MemberExpression,
  ObjectExpression,
  ReturnStatement,
  NumberLiteral,
  StringLiteral,
  Identifier,
  VariableDeclaration,
  File,
  Program,
  ExportDefaultDeclaration,
  ImportDeclaration
} from "./parser/ast"
import { buildModuleMethods, buildFunctionCall } from "./parser/functions"
import {
  buildAnonymousFunction,
  parseFunctionFromBuffer
} from "./parser/anonymous-functions"
import {
  TokenType,
  isKeyword,
  isValidParameter,
  isArythmeticOperator,
  Token
} from "./lexer"
import { parseExpression } from "./parser/expressions"

let _c = 0
let _tokens = []

let _modules: any = {}

const peek = (pos = 0) => _tokens[_c + pos]
const consume = () => _tokens[_c++]

const parseTopLevelExpressions = () => {
  let expressions = []

  do {
    const [type, _value, _position] = peek()

    if (isKeyword([type])) {
      if (type === TokenType.DefModule) {
        expressions = [].concat(expressions, parseModule())
      } else {
        expressions.push(parseKeyword())
      }
    } else if (type === TokenType.Identifier) {
      expressions.push(parseIdentifier())
    } else if (type === TokenType.Number) {
      expressions.push(parseNumber())
    } else if (type === TokenType.MemberIdentifier) {
      const buffer = getBufferUntil(TokenType.Newline)
      expressions.push(parseFunctionFromBuffer(buffer))
    } else {
      consume()
    }
  } while (peek())

  const globalModule = declareModule("_global")
  const functions = getRegisteredMethods("_global")

  expressions = [].concat(globalModule, functions, expressions)

  return new File(new Program(expressions.filter(x => x)))
}

const parseKeyword = () => {
  const [type, _value] = consume()

  if (type === TokenType.Def) return parseModuleMethod("_global")
  if (type === TokenType.Import) return parseImport()
}

const parseIdentifier = (val?) => {
  const [type, value] = val ? val : consume()
  const [operator_type, operator_value] = peek()
  const next = peek(1)

  if (operator_type === TokenType.ParamsOpen) {
    const params = getParams()
    return buildFunctionCall(value, params)
  } else if (operator_type === TokenType.Equals) {
    consume() // remove =
    let right

    if (next && next[0] === TokenType.Fn) {
      const buffer = getBufferUntil(TokenType.End)
      right = buildAnonymousFunction(buffer)
    } else if (next && next[0] === TokenType.MemberIdentifier) {
      const buffer = getBufferUntil(TokenType.Newline)
      right = parseFunctionFromBuffer(buffer)
    } else if (next && next[0] === TokenType.Identifier) {
      right = parseIdentifier()
    } else {
      const buffer = getBufferUntil(TokenType.Newline)
      right = parseExpression(buffer)
    }

    return new VariableDeclaration(new Identifier(value), right)
  } else if (isArythmeticOperator([operator_type])) {
    const op = consume()
    return makeBinaryExpression(new Identifier(value), op)
  } else {
    return new ExpressionStatement(new Identifier(value))
  }
}

const getBufferUntil = (token: TokenType) => {
  let buffer = []
  while (true) {
    const nextToken = consume()
    if (!nextToken) return buffer
    const [type] = nextToken
    if (type === token) break

    buffer.push(nextToken)
  }

  return buffer
}

const parseFunctionCall = (val?): ExpressionStatement => {
  const value = val || consume()
  const [type, _value] = peek()

  if (type === TokenType.ThinArrow) {
    const buffer = getBufferUntil(TokenType.End)
    buffer.unshift(value)
    return buildAnonymousFunction(buffer)
  } else if (value[1].indexOf(".") > -1) {
    const parts = value[1].split(".")
    const modulename = parts[0]

    return new ExpressionStatement(
      new CallExpression(
        new MemberExpression(new Identifier(modulename), new Identifier(name)),
        [] //params.map(param => parseAnyType(getType(param)))
      )
    )
  } else {
    return new ExpressionStatement(
      new CallExpression(
        new Identifier(name),
        [] //params.map(param => parseAnyType(getType(param)))
      )
    )
  }
}

const parseNumber = (val?) => {
  const value = val || consume()
  const operator = consume()

  if (["+", "-", "/", "*"].includes(operator[1])) {
    return makeBinaryExpression(new NumberLiteral(value[1]), operator)
  } else {
    return new NumberLiteral(value[1])
  }
}

const makeBinaryExpression = (value, op: Token): ExpressionStatement => {
  const right = consume()
  let operator = op[1]

  if (op[0] === TokenType.StringConcat) {
    operator = "+"
  }

  return new ExpressionStatement(
    new BinaryExpression(value, operator, identifierOrNumber(right))
  )
}

const declareModule = name =>
  new VariableDeclaration(new Identifier(name), new ObjectExpression([]))

const parseModule = () => {
  consume() // remove defmodule
  const moduleName = consume()[1]

  if (!_modules[moduleName]) {
    _modules[moduleName] = {}
  }

  const moduleDeclaration = declareModule(moduleName)

  while (true) {
    const [type, value, position] = consume()
    if (type === TokenType.End) break

    if (type === TokenType.Def) {
      parseModuleMethod(moduleName)
    } else if (type === TokenType.Newline || isKeyword([type])) {
      continue
    } else {
      throw new SyntaxError(
        `Only function declarations are permitted inside a module! \n Received: ${value}`
      )
    }
  }

  const functions = getRegisteredMethods(moduleName)
  const moduleExport = new ExportDefaultDeclaration(new Identifier(moduleName))

  return [].concat(moduleDeclaration, functions, moduleExport)
}

const parseImport = () => {
  const buffer = getBufferUntil(TokenType.Newline)

  const [mod, as, name] = buffer

  if (mod[0] === TokenType.Identifier) {
    return new ImportDeclaration(
      new StringLiteral("core/" + mod[1]),
      new Identifier(name ? name[1] : mod[1])
    )
  } else if (mod[0] === TokenType.String) {
    if (!as) throw SyntaxError("Missing 'as' keword in foreign import!")
    if (!name) throw SyntaxError("Missing import alias in foreign import!")
    if (name[0] !== TokenType.Identifier || as[1] !== "as")
      throw SyntaxError("Unknown alias in import statement!")

    return new ImportDeclaration(
      new StringLiteral(mod[1]),
      new Identifier(name[1])
    )
  } else {
    throw SyntaxError(`Invalid import name ${mod[1]}!`)
  }
}

const registerMethod = (
  moduleName: string,
  functionName: string,
  params: any[],
  body: Block
) => {
  if (!_modules[moduleName]) {
    _modules[moduleName] = {}
  }

  if (!_modules[moduleName][functionName]) {
    _modules[moduleName][functionName] = []
  }

  _modules[moduleName][functionName].push({
    params,
    body
  })
}

const getRegisteredMethods = (moduleName: string): ExpressionStatement[] => {
  const mod = _modules[moduleName]

  if (!_modules || !_modules[moduleName]) return []

  const [declarations, assignments] = buildModuleMethods(mod, moduleName)

  return [].concat(declarations, assignments)
}

const getParams = () => {
  const [type, _, position] = consume()

  if (type === TokenType.ParamsOpen) {
    let params = []
    while (true) {
      const next = consume()

      if (next[0] === TokenType.ParamsClose) break
      if (next[0] === TokenType.Comma || next[0] === TokenType.Newline) continue

      if (!isValidParameter(next)) {
        throw new SyntaxError(
          `Unexpected token ${next[1]} when declaring function parameters at ${
            next[2]
          }`
        )
      }

      params.push(next)
    }

    return params
  } else {
    throw new SyntaxError(`Expected parameters definition at ${position}`)
  }
}

const getBlock = () => {
  const [type, value, position] = consume()

  if (type === TokenType.Do) {
    let body = []
    while (true) {
      const token = consume()
      const [nextType, nextValue] = token

      if (nextType === TokenType.End) break

      if (nextType === TokenType.Identifier) {
        body.push(parseIdentifier(token))
        continue
      } else if (
        nextType === TokenType.Number ||
        nextType === TokenType.String
      ) {
        const buffer = getBufferUntil(TokenType.Newline)
        body.push(parseExpression([token, ...buffer]))
      } else if (nextType === TokenType.Fn) {
        const buffer = getBufferUntil(TokenType.End)
        body.push(buildAnonymousFunction([token, ...buffer]))
      }
    }

    const expressions = body.filter(x => x)
    const last = expressions.pop()
    const returning = new ReturnStatement(last)

    return new Block([].concat(expressions, returning))
  } else {
    throw new SyntaxError(
      `Expected block declaration but got ${value} at ${position}`
    )
  }
}

const parseModuleMethod = moduleName => {
  const [type, name, position] = consume()
  let params, block

  if (type === TokenType.Identifier) {
    params = getParams()
    block = getBlock()
  } else {
    throw new SyntaxError(`${name} is not a valid function name at ${position}`)
  }

  registerMethod(moduleName, name, params, block)
}

// const parseBlock = () => {
//   consume() // remove do
//   const body = []

//   while (true) {
//     const token = consume()
//     const [type] = token

//     if (type === TokenType.Identifier) {
//       body.push(parseIdentifier(token))
//     } else if (type === TokenType.Number || type === TokenType.String) {
//       body.push(parseExpressionLine(token))
//     } else if (type === TokenType.Function) {
//       body.push(parseFunctionCall(token))
//     }

//     const [peek_type] = peek()
//     if (peek_type === TokenType.End) break
//   }

//   const expressions = body.filter(x => x)
//   const last = expressions.pop()
//   const returning = new ReturnStatement(last)

//   return new Block([].concat(expressions, returning))
// }

const parseExpressionLine = (val?): ExpressionStatement => {
  const buffer = []
  let current = val ? val : consume()

  while (true) {
    buffer.push(current)
    current = consume()

    if (current[0] === TokenType.Newline) break
  }

  if (!buffer.length) {
    return null
  }

  return parseExpression(buffer)
}

// const parseExpression = (buffer): ExpressionStatement => {
//   if (buffer.length === 1) {
//     return new ExpressionStatement(parseAnyType(buffer[0]))
//   }

//   const operator = buffer[1][1]

//   if (operator === "<>") {
//     return stringOperations(buffer)
//   } else {
//     return new ExpressionStatement(actionOrder(buffer))
//   }
// }

// const stringOperations = buffer => {
//   return new ExpressionStatement(
//     new BinaryExpression(
//       identifierOrString(buffer[0]),
//       "+",
//       identifierOrString(buffer[2])
//     )
//   )
// }

// const actionOrder = buffer => {
//   if (buffer.length === 1) {
//     return new NumberLiteral(buffer[0][1])
//   } else if (buffer.length === 3) {
//     const left = identifierOrNumber(buffer[0])
//     const right = identifierOrNumber(buffer[2])

//     return new BinaryExpression(left, buffer[1][1], right)
//   } else {
//     throw new SyntaxError(`Complex calculations are not supported yet.`)
//   }
// }

const parseMemberExpression = (token: Token) => {
  const [mod, fn] = token[1].split(".")

  return new MemberExpression(new Identifier(mod), new Identifier(fn))
}

export const parseAnyType = (token: Token) => {
  const [type, value] = token

  if (type === TokenType.Identifier) return new Identifier(value)
  if (type === TokenType.String) return new StringLiteral(value)
  if (type === TokenType.Number) return new NumberLiteral(value)
  if (type === TokenType.Function) return parseFunctionCall(token)
  if (type === TokenType.MemberIdentifier) return parseMemberExpression(token)

  throw new SyntaxError(
    `Invalid token "${value}" of type "${type}" used as a part of expression.`
  )
}

const identifierOrString = token => {
  if (token[0] === TokenType.Identifier) return new Identifier(token[1])
  if (token[0] === TokenType.String) return new StringLiteral(token[1])

  throw new SyntaxError(
    `Invalid token "${token[1]}" of type "${
      token[2]
    }" used as a part of expression.`
  )
}

const identifierOrNumber = token => {
  const [type, value, position] = token
  if (type === TokenType.Number) return new NumberLiteral(value)
  if (type === TokenType.Identifier) return new Identifier(value)

  throw new SyntaxError(
    `Invalid token "${value}" of type "${type}" used as a part of expression at ${position}.`
  )
}

export default tokens => {
  _c = 0
  _tokens = tokens
  _modules = {}

  return parseTopLevelExpressions()
}
