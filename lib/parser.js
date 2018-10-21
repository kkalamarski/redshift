const { Op, Num } = require("./datatypes")

const makeNumberLiteral = token => ({
  type: token[0],
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

const makeBinaryExpression = (token, left, right) => ({
  type: "BinaryExpression",
  operator: token[1],
  left,
  right
})

const getAST = token => {
  switch (token[0]) {
    case "NumericLiteral":
      return makeNumberLiteral(token)

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

let currentfn = ""
const parseLine = (fns, current, index, arr) => {
  if (!current.length) return fns

  if (current[0][0] === "VariableDeclaration") {
    if (current[0][1] === "end") return fns
    currentfn = current[1][1].split("(")[0]
    fns[currentfn] = []
    return fns
  }

  const expressionComparator = token => token[0] === "BinaryExpression"

  const ops = current.findIndex(expressionComparator)
  if (ops > 0) {
    fns[currentfn].push(
      makeBinaryExpression(
        current[ops],
        makeNumberLiteral(current[ops - 1]),
        makeNumberLiteral(current[ops + 1])
      )
    )
  }

  return fns
}
const buildFunctionBody = fn => ({
  type: "BlockStatement",
  body: fn.map((current, index, array) => {
    if (index + 1 === array.length) {
      return {
        type: "ReturnStatement",
        start: 60,
        end: 72,
        argument: current
      }
    }

    return {
      type: "ExpressionStatement",
      start: 53,
      end: 58,
      expression: current
    }
  })
})

const makeFunction = allFns => fn => {
  return {
    type: "VariableDeclaration",
    kind: "const",
    declarations: [
      {
        type: "VariableDeclarator",
        id: {
          type: "Identifier",
          name: fn
        },
        init: {
          type: "ArrowFunctionExpression",
          id: null,
          generator: false,
          expression: true,
          params: [],
          body: buildFunctionBody(allFns[fn])
        }
      }
    ]
  }
}

module.exports = tokens => {
  const fns = tokens.reduce(parseLine, {})
  const ast = Object.keys(fns).map(makeFunction(fns))

  return {
    type: "Program",
    body: ast,
    sourceType: "script",
    directives: []
  }
}
