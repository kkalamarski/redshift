const { Op, Num } = require("./datatypes")

const makeLiteral = token => ({
  type: "NumericLiteral",
  value: Number(token[1])
})

const makeVariableDeclaration = token => ({
  type: "VariableDeclaration",
  kind: "let",
  declarations: []
})

const makeVariableDeclarator = token => ({
  type: "VariableDeclarator",
  id: {
    type: "Identifier",
    name: token[1].split("(")[0]
  },
  init: {
    type: "ArrowFunctionExpression",
    id: null,
    generator: false,
    expression: true,
    params: [],
    body: null
  }
})

const makeBinaryExpression = token => ({
  type: "BinaryExpression",
  left: null,
  operator: token[1],
  right: null
})

const getAST = token => {
  switch (token[0]) {
    case "NumericLiteral":
      return makeLiteral(token)

    case "VariableDeclaration":
      return makeVariableDeclaration(token)

    case "VariableDeclarator":
      return makeVariableDeclarator(token)

    case "BinaryExpression":
      return makeBinaryExpression(token)

    default:
      return token
  }
}

const buildOperations = tokens => {
  const tokenComparator = token => token.type === "BinaryExpression"
  const id = tokens.findIndex(tokenComparator)

  if (id >= 0) {
    const operation = tokens.find(tokenComparator)
    const result = Object.assign({}, operation, {
      left: tokens[id - 1],
      right: tokens[id + 1]
    })

    return [].concat(
      tokens.filter((_, i) => i !== id && i !== id - 1 && i !== id + 1),
      result
    )
  }

  return tokens
}

const buildFunctions = tokens => {
  const tokenComparator = token => token.type === "VariableDeclarator"
  const id = tokens.findIndex(tokenComparator)

  if (id >= 0) {
    const operation = tokens.find(tokenComparator)
    const result = Object.assign({}, operation, {
      init: {
        ...operation.init,
        body: tokens[id + 1]
      }
    })

    return [].concat(tokens.filter((_, i) => i !== id && i !== id + 1), result)
  }

  return tokens
}

const buildDeclarations = tokens => {
  const tokenComparator = token => token.type === "VariableDeclaration"
  const id = tokens.findIndex(tokenComparator)

  if (id >= 0) {
    const operation = tokens.find(tokenComparator)
    const result = Object.assign({}, operation, {
      declarations: [tokens[id + 1]]
    })

    return result
  }

  return tokens
}

const parseLine = line => {
  const tokens = line.map(token => getAST(token))
  return buildDeclarations(buildFunctions(buildOperations(tokens)))
}

module.exports = tokens => {
  let ID = 0

  return {
    type: "Program",
    body: tokens
      .map(line => parseLine(line))
      .filter(line => !(line instanceof Array)),
    sourceType: "script",
    directives: []
  }
}
