interface AbstractSyntaxTreeNode {
  type: string
}

export enum DataType {
  Number = "Number",
  String = "String",
  Boolean = "Boolean"
}

export class BinaryExpression implements AbstractSyntaxTreeNode {
  public type: string = "BinaryExpression"
  public dataType: DataType
  constructor(public left, public operator, public right) {
    if (left.dataType === right.dataType) {
      this.dataType = left.dataType
    }
  }
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

export class Property {
  public type: string = "ObjectProperty"

  method = false
  shorthand = false
  computed = false
  kind = "init"

  constructor(public key, public value) {}
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
  public dataType: DataType = DataType.Number

  constructor(public raw: string) {
    this.value = Number(raw)
  }
}

export class BooleanLiteral {
  public type: string = "BooleanLiteral"
  public value: boolean
  public dataType: DataType = DataType.Number

  constructor(public raw: string) {
    this.value = raw === "true" ? true : false
  }
}

export class StringLiteral {
  public type: string = "StringLiteral"
  public value: string
  public dataType: DataType = DataType.String

  constructor(public raw: string) {
    this.value = raw.replace(/"/g, "")
  }
}

export class TemplateLiteral {
  public type: string = "TemplateLiteral"
  public dataType: DataType = DataType.String

  constructor(public expressions, public quasis) {}
}

export class TemplateLiteralValue {
  public cooked: string

  constructor(public raw: string) {
    this.cooked = raw
  }
}

export class TemplateElement {
  public type: string = "TemplateElement"
  public value: TemplateLiteralValue

  constructor(value, public tail = false) {
    this.value = new TemplateLiteralValue(value)
  }
}

export class TaggedTemplateExpression {
  public type: string = "TaggedTemplateExpression"

  constructor(public tag, public quasi) {}
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

class ImportNamespaceSpecifier {
  public type: string = "ImportNamespaceSpecifier"

  constructor(public local) {}
}

export class ImportDeclaration {
  public type: string = "ImportDeclaration"
  public specifiers: any[] = []

  constructor(public source, local, isDefault?) {
    this.specifiers = [
      isDefault
        ? new ImportDefaultSpecifier(local)
        : new ImportNamespaceSpecifier(local)
    ]
  }
}

export class ExportDefaultDeclaration {
  public type: string = "ExportDefaultDeclaration"

  constructor(public declaration) {}
}

export class ExportNamedDeclaration {
  public type: string = "ExportNamedDeclaration"
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
