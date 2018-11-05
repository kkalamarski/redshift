interface AbstractSyntaxTreeNode {
  type: string
}

export class BinaryExpression implements AbstractSyntaxTreeNode {
  public type: string = "BinaryExpression"

  constructor(public left, public operator, public right) {}
}

export class ReturnStatement implements AbstractSyntaxTreeNode {
  public type: string = "ReturnStatement"

  constructor(public argument) {}
}

export class ExpressionStatement implements AbstractSyntaxTreeNode {
  public type: string = "ExpressionStatement"

  constructor(public expression) {}
}

export class CallExpression implements AbstractSyntaxTreeNode {
  public type: string = "CallExpression"
  public arguments: any[]
  constructor(public callee, args) {
    this.arguments = args
  }
}

export class AssignmentExpression implements AbstractSyntaxTreeNode {
  public type: string = "AssignmentExpression"
  public operator: string = "="

  constructor(public left, public right) {}
}

export class ObjectExpression {
  public type: string = "ObjectExpression"

  constructor(public properties) {}
}

export class MemberExpression {
  public type: string = "MemberExpression"
  public computed: boolean = false

  constructor(
    public object: Identifier | ArrayExpression,
    public property: Identifier | NumberLiteral | StringLiteral
  ) {}
}

export class Block {
  public type: string = "BlockStatement"

  constructor(public body: any[]) {}
}

export class FunctionDeclaration {
  public type: string = "FunctionDeclaration"

  constructor(public id, public params, public body) {}
}

export class FunctionExpression {
  public type: string = "FunctionExpression"
  public generator: boolean = false
  public expression: boolean = false

  constructor(public id, public params, public body) {}
}

export class ArrowFunctionExpression {
  public type: string = "ArrowFunctionExpression"
  public generator: boolean = false
  public expression: boolean = true

  constructor(public id, public params, public body) {}
}

export class NumberLiteral {
  public type: string = "NumericLiteral"
  public value: number

  constructor(public raw: string) {
    this.value = Number(raw)
  }
}

export class StringLiteral {
  public type: string = "StringLiteral"
  public value: string

  constructor(public raw: string) {
    this.value = raw.replace(/"/g, "")
  }
}

export class Identifier {
  public type: string = "Identifier"

  constructor(public name) {}
}

class VariableDeclarator {
  public type: string = "VariableDeclarator"

  constructor(public id, public init) {}
}

export class VariableDeclaration {
  public type: string = "VariableDeclaration"
  public declarations: VariableDeclarator[] = []

  constructor(id, initial, public kind = "const") {
    this.declarations = [new VariableDeclarator(id, initial)]
  }
}

class ImportDefaultSpecifier {
  public type: string = "ImportDefaultSpecifier"

  constructor(public local) {}
}

export class ImportDeclaration {
  public type: string = "ImportDeclaration"
  public specifiers: ImportDefaultSpecifier[] = []

  constructor(public source, local) {
    this.specifiers = [new ImportDefaultSpecifier(local)]
  }
}

export class ExportDefaultDeclaration {
  public type: string = "ExportDefaultDeclaration"

  constructor(public declaration) {}
}

export class RestElement {
  public type: string = "RestElement"

  constructor(public argument: Identifier) {}
}

export class IfStatement {
  public type: string = "IfStatement"

  constructor(
    public test,
    public consequent: Block,
    public alternate: Block = null
  ) {}
}

export class LogicalExpression {
  public type: string = "LogicalExpression"

  constructor(public left, public operator: string, public right) {}
}

export class ArrayPattern {
  public type: string = "ArrayPattern"

  constructor(public elements: Identifier[]) {}
}

export class ArrayExpression {
  public type: string = "ArrayExpression"

  constructor(public elements: any[]) {}
}

export class Program {
  public type: string = "Program"
  public sourceType: string = "module"
  public directives: any[] = []

  constructor(public body) {}
}

export class File {
  public type: string = "File"

  constructor(public program: Program) {}
}
