class Parser {
  parse(tokens) {
    this.tokens = tokens
    this.c = 0

    return this.parseToken()
  }

  peek() {
    return this.tokens[this.c]
  }

  consume() {
    return this.tokens[this.c++]
  }

  parseToken() {
    const expressions = []

    do {
      const token = this.peek()
      const type = token[0]

      if (type === "key") {
        expressions.push(this.parseKeyword())
      } else if (type === "fn") {
        expressions.push(this.parseFunctionCall())
      } else if (type === "id") {
        expressions.push(this.parseIdentifier())
      } else if (type === "num") {
        expressions.push(this.parseNumber())
      } else {
        this.consume()
      }
    } while (this.peek())

    return this.Program(expressions.filter(x => x))
  }

  parseIdentifier(val) {
    const value = val ? val : this.consume()
    const operator = this.consume()

    if (operator[1] === "=") {
      return this.VariableDeclaration(
        this.Identifier(value[1]),
        this.parseExpressionLine()
      )
    } else if (["+", "-", "/", "*"].includes(operator[1])) {
      return this.makeBinaryExpression(this.Identifier(value[1]), operator[1])
    } else {
      return this.ExpressionStatement(this.Identifier(value[1]))
    }
  }

  parseFunctionCall() {
    const value = this.consume()
    const { name, params } = this.getFunctionNameAndParams(value[1])

    return this.ExpressionStatement(
      this.CallExpression(
        this.Identifier(name),
        params.map(param => this.parseTokentWithType(["num", param]))
      )
    )
  }

  parseNumber() {
    const value = this.consume()
    const operator = this.consume()

    if (["+", "-", "/", "*"].includes(operator[1])) {
      return this.makeBinaryExpression(this.Number(value[1]), operator[1])
    } else {
      return this.Number(value[1])
    }
  }

  makeBinaryExpression(value, operator) {
    const right = this.consume()
    return this.ExpressionStatement(
      this.BinaryExpression(value, operator, this.parseTokentWithType(right))
    )
  }

  parseKeyword() {
    const value = this.consume()[1]

    if (value === "def") return this.parseFunction()
  }

  parseFunction() {
    const fn = this.consume()[1]
    const { name, params } = this.getFunctionNameAndParams(fn)

    return this.Function(
      this.Identifier(name),
      params.map(param => this.Identifier(param)),
      this.peek()[1] === "do" ? this.parseBlock() : {}
    )
  }

  getFunctionNameAndParams(token) {
    const args = this.mapFunctionArguments(token)
    const name = token.split("(")[0]
    const nameWithArity = name + "_a" + args.length

    return {
      name: nameWithArity,
      params: args
    }
  }

  parseBlock() {
    const token = this.consume()
    const body = []

    while (this.peek()[1] !== "end") {
      const val = this.consume()

      if (val[0] === "id") {
        body.push(this.parseIdentifier(val))
      } else if (val[0] === "num") {
        body.push(this.parseExpressionLine(val))
      }
    }

    const expressions = body.filter(x => x)
    const last = expressions.pop()
    const returning = this.ReturnStatement(last.expression)

    return this.Block([].concat(expressions, returning))
  }

  parseExpressionLine(val) {
    const buffer = []
    let current = val ? val : this.consume()

    while (current[0] !== "newline") {
      buffer.push(current)
      current = this.consume()
    }

    if (!buffer.length) {
      return null
    }

    return this.parseExpression(buffer)
  }

  parseExpression(buffer) {
    const expressionType = buffer[0][0]

    if (expressionType === "str") {
      return this.ExpressionStatement(this.String(buffer[0][1]))
    } else {
      return this.ExpressionStatement(this.actionOrder([].concat(buffer)))
    }
  }

  actionOrder(buffer) {
    if (buffer.length === 1) {
      return this.Number(buffer[0][1])
    } else if (buffer.length === 3) {
      const left = this.parseTokentWithType(buffer[0])
      const right = this.parseTokentWithType(buffer[2])

      return this.BinaryExpression(left, buffer[1][1], right)
    } else {
      throw new SyntaxError(`Complex calculations are not supported yet.`)
    }
  }

  parseTokentWithType(token) {
    if (token[0] === "num") return this.Number(token[1])
    if (token[0] === "id") return this.Identifier(token[1])

    throw new SyntaxError(
      `Invalid token "${token[1]}" used as a part of expression.`
    )
  }

  BinaryExpression(left, operator, right) {
    return {
      type: "BinaryExpression",
      operator,
      left,
      right
    }
  }

  ReturnStatement(argument) {
    return {
      type: "ReturnStatement",
      argument
    }
  }

  ExpressionStatement(expression) {
    return {
      type: "ExpressionStatement",
      expression
    }
  }

  CallExpression(callee, args) {
    return {
      type: "CallExpression",
      callee,
      arguments: args
    }
  }

  AssignmentExpression(left, right) {
    return {
      type: "AssignmentExpression",
      operator: "=",
      left,
      right
    }
  }

  Block(body) {
    return {
      type: "BlockStatement",
      body
    }
  }

  Function(name, params, body) {
    return {
      type: "FunctionDeclaration",
      id: name,
      params,
      body
    }
  }

  Number(value) {
    return {
      type: "NumericLiteral",
      value: Number(value),
      raw: value
    }
  }

  String(value) {
    return {
      type: "StringLiteral",
      value: value.replace(/"/g, ""),
      raw: value
    }
  }

  Identifier(name) {
    return {
      type: "Identifier",
      name
    }
  }

  VariableDeclaration(id, initial) {
    return {
      type: "VariableDeclaration",
      declarations: [
        {
          type: "VariableDeclarator",
          id,
          init: initial
        }
      ],
      kind: "const"
    }
  }

  Program(body) {
    return {
      type: "Program",
      body,
      sourceType: "module",
      directives: []
    }
  }

  parseTokens(tokens) {
    if (!tokens.length) return

    if (tokens[0][1] === "def") {
      const fn = tokens[1][1]
      const name = fn.split("(")[0]
      const args = this.mapFunctionArguments(fn)

      this.functions[name] = {
        arguments: args
      }
    }
  }

  buildAST(type, value) {
    return type + ": " + value
  }

  mapFunctionArguments(name) {
    return name
      .split("(")[1]
      .replace(")", "")
      .split(",")
      .map(a => a.trim())
      .filter(a => a.length)
  }
}

module.exports = Parser
