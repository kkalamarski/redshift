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
  FunctionDeclaration,
  CallExpression
} from "./ast"
import { TokenType } from "./../lexer"
import { parseAnyType } from "./tokens"

const createLogicalStatement = params => {
  const [head, ...tail] = params

  const current = new BinaryExpression(
    new MemberExpression(new Identifier("params"), new NumberLiteral(head[3])),
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
  const nonIdParams = params.filter(
    ([type, value, id]) => type !== TokenType.Identifier
  )

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
            ([type, value], index) =>
              new Identifier(
                type === TokenType.Identifier ? value : `_${type}_${index}`
              )
          )
        ),
        new Identifier("params")
      )
    : []

const buildClause = ({ params, body: block }) => {
  const paramDeclaration = redeclareParamsInsideClause(params)
  const body = new Block([].concat(paramDeclaration, block.body))
  const args = params.map((param, index) => param.concat(index))

  return new IfStatement(buildPattenrMatching(args), body)
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

export const buildFunctionCall = (name, params) => {
  return new ExpressionStatement(
    new CallExpression(
      new Identifier(name),
      params.map(param => parseAnyType(param))
    )
  )
}
