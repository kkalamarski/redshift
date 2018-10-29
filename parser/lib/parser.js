const isNumber = t => /^\d+(\.\d{1,2})?$/.test(t)
const isString = t => /^".*"$/
const isIndentifier = t => /^[$A-Z_][0-9A-Z_$]*$/i.test(t)

const AST = require("./parser/ast")

let _c = 0
let _tokens = []

const peek = () => _tokens[_c]
const consume = () => _tokens[_c++]
const source = num =>
  `${"\n```\n"}${_tokens
    .slice(_c - num, _c + num)
    .map(a => a[1])
    .join(" ")}${"\n```"}`

const parseTopLevelExpressions = () => {
  let expressions = []

  do {
    const token = peek()
    const type = token[0]
    const value = token[1]

    if (type === "key") {
      if (value === "defmodule")
        expressions = [].concat(expressions, parseModule())
      else expressions.push(parseKeyword())
    } else if (type === "fn") {
      expressions.push(parseFunctionCall())
    } else if (type === "id") {
      expressions.push(parseIdentifier())
    } else if (type === "num") {
      expressions.push(parseNumber())
    } else {
      consume()
    }
  } while (peek())

  return AST.Program(expressions.filter(x => x))
}

const parseKeyword = () => {
  const value = consume()[1]

  if (value === "def") return parseFunction()
  if (value === "import") return parseImport()
}

const parseIdentifier = val => {
  const value = val ? val : consume()
  const operator = consume()
  const nextVal = peek()

  if (operator[1] === "=") {
    return AST.VariableDeclaration(
      AST.Identifier(value[1]),
      nextVal[0] === "fn" ? parseFunctionCall() : parseExpressionLine()
    )
  } else if (["+", "-", "/", "*"].includes(operator[1])) {
    return makeBinaryExpression(AST.Identifier(value[1]), operator[1])
  } else {
    return AST.ExpressionStatement(AST.Identifier(value[1]))
  }
}

const parseFunctionCall = val => {
  const value = val || consume()

  if (value[1].indexOf(".") > -1) {
    const parts = value[1].split(".")
    const modulename = parts[0]
    const { name, params } = getFunctionNameAndParams(parts[1])

    return AST.CallExpression(
      AST.MemberExpression(AST.Identifier(modulename), AST.Identifier(name)),
      params.map(param => parseAnyType(getType(param)))
    )
  } else {
    const { name, params } = getFunctionNameAndParams(value[1])

    return AST.ExpressionStatement(
      AST.CallExpression(
        AST.Identifier(name),
        params.map(param => parseAnyType(getType(param)))
      )
    )
  }
}

const getType = value => {
  if (isNumber(value)) return ["num", value]
  if (isString(value)) return ["str", value]
  if (isIndentifier(value)) return ["id", value]
}

const parseNumber = () => {
  const value = consume()
  const operator = consume()

  if (["+", "-", "/", "*"].includes(operator[1])) {
    return makeBinaryExpression(AST.Number(value[1]), operator[1])
  } else {
    return AST.Number(value[1])
  }
}

const makeBinaryExpression = (value, operator) => {
  const right = consume()
  return AST.ExpressionStatement(
    AST.BinaryExpression(value, operator, identifierOrNumber(right))
  )
}

const parseModule = () => {
  consume() // remove defmodule
  const moduleName = consume()[1]
  const moduleDeclaration = AST.VariableDeclaration(
    AST.Identifier(moduleName),
    AST.ObjectExpression([])
  )
  let functions = []

  while (consume()[1] !== "end") {
    const next = peek()

    if (next[1] === "def") {
      consume() // remove "def" from queue
      functions.push(parseModuleMethod(moduleName))
      consume() // remove "end" from queue
    } else if (next[0] === "newline" || next[0] === "key") {
      continue
    } else {
      throw new SyntaxError(
        `Only function declarations are permitted inside a module! \n Received: ${next}`
      )
    }
  }

  const moduleExport = AST.ExportDefaultDeclaration(AST.Identifier(moduleName))

  return [].concat(moduleDeclaration, functions, moduleExport)
}

const parseImport = () => {
  const buffer = []

  while (peek()[0] !== "newline") {
    buffer.push(consume())
  }

  const [mod, as, name] = buffer

  if (mod[0] === "id") {
    return AST.ImportDeclaration(
      AST.String("core/" + mod[1]),
      AST.Identifier(name ? name[1] : mod[1])
    )
  } else if (mod[0] === "str") {
    if (!as) throw SyntaxError("Missing 'as' keword in foreign import!")
    if (!name) throw SyntaxError("Missing import alias in foreign import!")
    if (name[0] !== "id" || as[1] !== "as")
      throw SyntaxError("Unknown alias in import statement!")

    return AST.ImportDeclaration(AST.String(mod[1]), AST.Identifier(name[1]))
  } else {
    throw SyntaxError(`Invalid import name ${mod[1]}!`)
  }
}

const parseFunction = () => {
  const fn = consume()[1]
  const { name, params } = getFunctionNameAndParams(fn)

  return AST.Function(
    AST.Identifier(name),
    params.map(param => AST.Identifier(param)),
    peek()[1] === "do" ? parseBlock() : {}
  )
}

const parseModuleMethod = moduleName => {
  const fn = consume()[1]
  const { name, params } = getFunctionNameAndParams(fn)

  return AST.ExpressionStatement(
    AST.AssignmentExpression(
      AST.MemberExpression(AST.Identifier(moduleName), AST.Identifier(name)),
      AST.FunctionExpression(
        null,
        params.map(param => AST.Identifier(param)),
        peek()[1] === "do" ? parseBlock() : {}
      )
    )
  )
}

const getFunctionNameAndParams = token => {
  const args = mapFunctionArguments(token)
  const name = token.split("(")[0]
  const nameWithArity = name + "_a" + args.length

  return {
    name: nameWithArity,
    params: args
  }
}

const parseBlock = () => {
  const token = consume()
  const body = []

  while (peek()[1] !== "end") {
    const val = consume()

    if (val[0] === "id") {
      body.push(parseIdentifier(val))
    } else if (val[0] === "num" || val[0] === "str") {
      body.push(parseExpressionLine(val))
    }
  }

  const expressions = body.filter(x => x)
  const last = expressions.pop()
  const returning = AST.ReturnStatement(last.expression)

  return AST.Block([].concat(expressions, returning))
}

const parseExpressionLine = val => {
  const buffer = []
  let current = val ? val : consume()

  while (current[0] !== "newline") {
    buffer.push(current)
    current = consume()
  }

  if (!buffer.length) {
    return null
  }

  return parseExpression(buffer)
}

const parseExpression = buffer => {
  if (buffer.length === 1) {
    return parseAnyType(buffer[0])
  }

  const operator = buffer[1][1]

  if (operator === "<>") {
    return stringOperations(buffer)
  } else {
    return AST.ExpressionStatement(actionOrder(buffer))
  }
}

const stringOperations = buffer => {
  return AST.ExpressionStatement(
    AST.BinaryExpression(
      identifierOrString(buffer[0]),
      "+",
      identifierOrString(buffer[2])
    )
  )
}

const actionOrder = buffer => {
  if (buffer.length === 1) {
    return Number(buffer[0][1])
  } else if (buffer.length === 3) {
    const left = identifierOrNumber(buffer[0])
    const right = identifierOrNumber(buffer[2])

    return AST.BinaryExpression(left, buffer[1][1], right)
  } else {
    throw new SyntaxError(`Complex calculations are not supported yet.`)
  }
}

const parseAnyType = token => {
  if (token[0] === "id") return AST.Identifier(token[1])
  if (token[0] === "str") return AST.String(token[1])
  if (token[0] === "num") return AST.Number(token[1])
  if (token[0] === "fn") return parseFunctionCall(token[1])

  throw new SyntaxError(
    `Invalid token "${token[1]}" of type "${
      token[0]
    }" used as a part of expression.`
  )
}

const identifierOrString = token => {
  if (token[0] === "id") return AST.Identifier(token[1])
  if (token[0] === "str") return AST.String(token[1])

  throw new SyntaxError(
    `Invalid token "${token[1]}" of type "${
      token[2]
    }" used as a part of expression.`
  )
}

const identifierOrNumber = token => {
  if (token[0] === "num") return AST.Number(token[1])
  if (token[0] === "id") return AST.Identifier(token[1])

  throw new SyntaxError(
    `Invalid token "${token[1]}" of type "${
      token[2]
    }" used as a part of expression.`
  )
}

const mapFunctionArguments = name => {
  try {
    return name
      .split("(")[1]
      .replace(")", "")
      .split(",")
      .map(a => a.trim())
      .filter(a => a.length)
  } catch (e) {
    throw new SyntaxError(
      `Unknown identifier ${name} when parsing function arguments near ${source(
        5
      )}`
    )
  }
}

module.exports = tokens => {
  _c = 0
  _tokens = tokens

  return parseTopLevelExpressions()
}
