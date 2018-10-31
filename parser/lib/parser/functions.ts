import {
  ExpressionStatement,
  StringLiteral,
  AssignmentExpression,
  MemberExpression,
  Identifier,
  FunctionExpression,
  RestElement,
  Block,
  IfStatement,
  BinaryExpression,
  NumberLiteral,
  LogicalExpression,
  VariableDeclaration,
  ArrayPattern,
  FunctionDeclaration
} from "./ast"
import Lexer from "../../lib/lexer"

const parseAnyType = token => {
  if (token[0] === "str") return new StringLiteral(token[1])
  if (token[0] === "num") return new NumberLiteral(token[1])

  throw new SyntaxError(
    `Invalid token "${token[1]}" of type "${
      token[0]
    }" used as a part of expression.`
  )
}

const createLogicalStatement = params => {
  const [head, ...tail] = params

  const current = new BinaryExpression(
    new MemberExpression(new Identifier("params"), new NumberLiteral(head[2])),
    "===",
    parseAnyType(head)
  )

  if (!tail.length) {
    return current
  }

  return new LogicalExpression(current, "&&", createLogicalStatement(tail))
}

const buildPattenrMatching = params => {
  const length = params.length
  const nonIdParams = params.filter(([type, value, id]) => type !== "id")

  const arityCheck = new BinaryExpression(
    new MemberExpression(new Identifier("params"), new Identifier("length")),
    "===",
    new NumberLiteral(length)
  )

  if (nonIdParams.length) {
    return new LogicalExpression(
      arityCheck,
      "&&",
      createLogicalStatement(nonIdParams)
    )
  } else {
    // Just match number of params
    return arityCheck
  }
}

const redeclareParamsInsideClause = params =>
  params.length
    ? new VariableDeclaration(
        new ArrayPattern(
          params.map(
            ([type, value, id]) =>
              new Identifier(type === "id" ? value : `_${id}`)
          )
        ),
        new Identifier("params")
      )
    : []

const buildClause = ({ params, body: block }) => {
  const lexer = new Lexer()
  const pattern = params.map((param, id) => [
    lexer.getTokenType(param),
    param,
    id
  ])

  const paramDeclaration = redeclareParamsInsideClause(pattern)
  const body = new Block([].concat(paramDeclaration, block.body))

  return new IfStatement(buildPattenrMatching(pattern), body)
}

export const buildModuleMethods = (mod: any, modName: string): any[] => {
  const fnNames = Object.keys(mod)

  const fnDeclarations = fnNames.map(name => {
    const clauses = mod[name].map(clause => buildClause(clause))

    return new FunctionDeclaration(
      new Identifier(name),
      [new RestElement(new Identifier("params"))],
      new Block(clauses)
    )
  })

  const moduleAssignments = fnNames.map(name => {
    return new ExpressionStatement(
      new AssignmentExpression(
        new MemberExpression(new Identifier(modName), new Identifier(name)),
        new Identifier(name)
      )
    )
  })

  return [fnDeclarations, moduleAssignments]
}
