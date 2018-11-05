import {
  BinaryExpression,
  Block,
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
  ImportDeclaration,
  RestElement,
  TaggedTemplateExpression,
  TemplateLiteral,
  TemplateElement,
  TemplateLiteralValue
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
  isOperator,
  Token
} from "./lexer"
import { parseExpression } from "./parser/expressions"
import { parseIdentifierOrNumber } from "./parser/tokens"
import { parseList } from "./parser/lists"
import { parseString } from "./parser/strings"

export default class Parser {
  private _c = 0
  private _modules = {}

  constructor(private tokens: Token[]) {}

  public parse(asProgram = true) {
    return asProgram
      ? new File(new Program(this.parseTopLevelExpressions()))
      : this.parseTopLevelExpressions()
  }

  private consume = () => this.tokens[this._c++]
  private peek = (pos = 0) =>
    this.tokens[this._c + pos]
      ? this.tokens[this._c + pos]
      : this.tokens[this.tokens.length]

  private parseTopLevelExpressions() {
    let expressions = []

    do {
      const [type, _value, _position] = this.peek()

      if (isKeyword([type])) {
        if (type === TokenType.DefModule) {
          expressions = [].concat(expressions, this.parseModule())
        } else {
          expressions.push(this.parseKeyword())
        }
      } else if (type === TokenType.Identifier) {
        expressions.push(this.parseIdentifier())
      } else if (type === TokenType.Number) {
        expressions.push(this.parseNumber())
      } else if (type === TokenType.ListOpen) {
        const buffer = this.getBufferUntil(TokenType.ListClose)
        expressions.push(new ExpressionStatement(parseList(buffer)))
      } else if (type === TokenType.MemberIdentifier) {
        const buffer = this.getBufferUntil(TokenType.Newline)
        expressions.push(parseFunctionFromBuffer(buffer))
      } else {
        this.consume()
      }
    } while (this.peek())

    const globalModule = this.declareModule("_global")
    const functions = this.getRegisteredMethods("_global")

    expressions = [].concat(globalModule, functions, expressions)

    return expressions.filter(x => x)
  }

  private parseKeyword = () => {
    const [type, value] = this.consume()

    if (type === TokenType.Def) return this.parseModuleMethod("_global")
    if (type === TokenType.Import) return this.parseImport()
    if (type === TokenType.Fn) {
      const buffer = this.getBufferUntil(TokenType.End)
      const expr = [[type, value], ...buffer]

      return buildAnonymousFunction(expr)
    }
  }

  private parseIdentifier = (val?) => {
    const [type, value] = val ? val : this.consume()
    const [operator_type, operator_value] = this.peek()
    const next = this.peek(1)

    if (operator_type === TokenType.EndOfFile) {
      return new Identifier(value)
    }

    if (operator_type === TokenType.ParamsOpen) {
      const params = this.getParams()
      return buildFunctionCall(new Identifier(value), params)
    }

    if (operator_type === TokenType.Tilde && next[0] === TokenType.String) {
      return new ExpressionStatement(
        new TaggedTemplateExpression(new Identifier(value), parseString(next))
      )
    }

    if (operator_type === TokenType.Equals) {
      this.consume() // remove =
      let right

      if (next && next[0] === TokenType.Fn) {
        const buffer = this.getBufferUntil(TokenType.End)
        right = buildAnonymousFunction(buffer)
      } else if (next && next[0] === TokenType.MemberIdentifier) {
        const buffer = this.getBufferUntil(TokenType.Newline)
        right = parseFunctionFromBuffer(buffer)
      } else if (next && next[0] === TokenType.ListOpen) {
        const buffer = this.getBufferUntil(TokenType.ListClose)
        right = parseList(buffer)
      } else if (next && next[0] === TokenType.Identifier) {
        right = this.parseIdentifier()
      } else {
        const buffer = this.getBufferUntil(TokenType.Newline)
        right = parseExpression(buffer)
      }

      return new VariableDeclaration(new Identifier(value), right)
    }

    if (isOperator([operator_type])) {
      const buffer = this.getBufferUntil(TokenType.Newline)
      return parseExpression([[type, value], ...buffer])
    }

    return new ExpressionStatement(new Identifier(value))
  }

  private getBufferUntil = (token: TokenType) => {
    let buffer = []
    while (true) {
      const nextToken = this.consume()
      if (!nextToken) return buffer
      const [type] = nextToken
      if (type === token) break

      buffer.push(nextToken)
    }

    return buffer
  }

  private parseNumber = (val?) => {
    const value = val || this.consume()
    const operator = this.consume()

    if (["+", "-", "/", "*"].includes(operator[1])) {
      return this.makeBinaryExpression(new NumberLiteral(value[1]), operator)
    } else {
      return new NumberLiteral(value[1])
    }
  }

  private makeBinaryExpression = (value, op: Token): ExpressionStatement => {
    const right = this.consume()
    let operator = op[1]

    if (op[0] === TokenType.StringConcat) {
      operator = "+"
    }

    return new ExpressionStatement(
      new BinaryExpression(value, operator, parseIdentifierOrNumber(right))
    )
  }

  private declareModule = name =>
    new VariableDeclaration(new Identifier(name), new ObjectExpression([]))

  private parseModule = () => {
    this.consume() // remove defmodule
    const moduleName = this.consume()[1]

    if (!this._modules[moduleName]) {
      this._modules[moduleName] = {}
    }

    const moduleDeclaration = this.declareModule(moduleName)

    while (true) {
      const [type, value, position] = this.consume()
      if (type === TokenType.End) break

      if (type === TokenType.Def) {
        this.parseModuleMethod(moduleName)
      } else if (type === TokenType.Newline || isKeyword([type])) {
        continue
      } else {
        throw new SyntaxError(
          `Only function declarations are permitted inside a module! \n Received: ${value}`
        )
      }
    }

    const functions = this.getRegisteredMethods(moduleName)
    const moduleExport = new ExportDefaultDeclaration(
      new Identifier(moduleName)
    )

    return [].concat(moduleDeclaration, functions, moduleExport)
  }

  private parseImport = () => {
    const buffer = this.getBufferUntil(TokenType.Newline)

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

  private registerMethod = (
    moduleName: string,
    functionName: string,
    params: any[],
    body: Block
  ) => {
    if (!this._modules[moduleName]) {
      this._modules[moduleName] = {}
    }

    if (!this._modules[moduleName][functionName]) {
      this._modules[moduleName][functionName] = []
    }

    this._modules[moduleName][functionName].push({
      params,
      body
    })
  }

  private getRegisteredMethods = (
    moduleName: string
  ): ExpressionStatement[] => {
    const mod = this._modules[moduleName]

    if (!this._modules || !this._modules[moduleName]) return []

    const [declarations, assignments] = buildModuleMethods(mod, moduleName)

    return [].concat(declarations, assignments)
  }

  private getParams = () => {
    const [type, _, position] = this.consume()

    if (type === TokenType.ParamsOpen) {
      let params = []
      while (true) {
        const next = this.consume()

        if (next[0] === TokenType.ParamsClose) break
        if (next[0] === TokenType.Comma || next[0] === TokenType.Newline)
          continue

        if (!isValidParameter(next)) {
          throw new SyntaxError(
            `Unexpected token ${
              next[1]
            } when declaring function parameters at ${next[2]}`
          )
        }

        params.push(next)
      }

      return params
    } else {
      throw new SyntaxError(`Expected parameters definition at ${position}`)
    }
  }

  private getBlock = () => {
    const [type, value, position] = this.consume()

    if (type === TokenType.Do) {
      let body = []
      while (true) {
        const token = this.consume()
        const [nextType, nextValue] = token

        if (nextType === TokenType.End) break

        if (nextType === TokenType.Identifier) {
          body.push(this.parseIdentifier(token))
          continue
        } else if (nextType === TokenType.MemberIdentifier) {
          const buffer = this.getBufferUntil(TokenType.Newline)
          body.push(parseFunctionFromBuffer([token, ...buffer]))
          continue
        } else if (
          nextType === TokenType.Number ||
          nextType === TokenType.String
        ) {
          const buffer = this.getBufferUntil(TokenType.Newline)
          body.push(parseExpression([token, ...buffer]))
        } else if (nextType === TokenType.Fn) {
          const buffer = this.getBufferUntil(TokenType.End)
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

  private parseModuleMethod = moduleName => {
    const [type, name, position] = this.consume()
    let params, block

    if (type === TokenType.Identifier) {
      params = this.getParams()
      block = this.getBlock()
    } else {
      throw new SyntaxError(
        `${name} is not a valid function name at ${position}`
      )
    }

    this.registerMethod(moduleName, name, params, block)
  }
}
