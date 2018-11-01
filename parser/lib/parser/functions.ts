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
import { getTokenType, TokenKind } from "./../lexer"
import { parseAnyType } from "../parser"

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
  const nonIdParams = params.filter(
    ([type, value, id]) => type !== TokenKind.Identifier
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
            ([type, value, id]) =>
              new Identifier(type === TokenKind.Identifier ? value : `_${id}`)
          )
        ),
        new Identifier("params")
      )
    : []

const buildClause = ({ params, body: block }) => {
  const pattern = params.map((param, id) => [getTokenType(param), param, id])

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

export const getFunctionNameAndParams = token => {
  const params = mapFunctionArguments(token)
  const name = token.split("(")[0]

  return {
    name,
    params
  }
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
      `Unknown identifier ${name} when parsing function arguments`
    )
  }
}
