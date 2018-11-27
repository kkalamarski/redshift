import { RedshiftVisitor } from "./RedshiftVisitor"
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor"
import {
  BinaryExpression,
  Identifier,
  Program,
  NumberLiteral,
  StringLiteral,
  BooleanLiteral,
  VariableDeclaration,
  FunctionDeclaration,
  Block,
  ReturnStatement,
  CallExpression,
  MemberExpression,
  ExportNamedDeclaration,
  ArrowFunctionExpression,
  ImportDeclaration,
  ArrayExpression,
  ObjectExpression,
  Property,
  File,
  ObjectPattern
} from "./lib/ast"

import {
  ProgramContext,
  ExpressionContext,
  BinaryExpressionContext,
  AtomExprContext,
  LogicExpressionContext,
  ConstDeclarationContext,
  FuncDeclarationContext,
  BlockContext,
  FuncCallContext,
  FuncExprContext,
  FuncParamsContext,
  MemberExpressionContext,
  LambdaContext,
  LambdaCallContext,
  ImportStatementContext,
  ListExprContext,
  ListContext,
  RecordExprContext,
  RecordContext,
  KeyValueContext,
  StatementContext,
} from "./RedshiftParser"

const typed: { [x: string]: any } = {}

export default class RedshiftASTGenerator extends AbstractParseTreeVisitor<void>
  implements RedshiftVisitor<void> {
  private showLogs = false

  private log(...params) {
    this.showLogs && console.log(...params)
  }

  public visit<T>(tree): T {
    return tree.accept(this)
  }

  public defaultResult() {
    return "default"
  }

  public visitProgram(ctx: ProgramContext) {
    this.log("program visited", ctx.text)
    const expressions = ctx.statement().map(expr => this.visit(expr))

    return new File(new Program(expressions))
  }

  public visitStatement(ctx: StatementContext) {
    return this.visit(ctx.getChild(0))
  }

  public visitBlock(ctx: BlockContext) {
    return ctx.children.map(expr => this.visit(expr))
  }
  
  public visitExpression(ctx: ExpressionContext) {
    this.log("expression visited", ctx.text)

    return this.visitChildren(ctx)
  }

  public visitAtomExpr(
    ctx: AtomExprContext
  ): NumberLiteral | StringLiteral | BooleanLiteral | Identifier {
    this.log("atom expression visited", ctx.text)

    if (ctx.NUMBER()) return new NumberLiteral(ctx.text)
    else if (ctx.STRING()) return new StringLiteral(ctx.text)
    else if (ctx.BOOLEAN()) return new BooleanLiteral(ctx.text)
    else if (ctx.IDENTIFIER()) return new Identifier(ctx.text)
  }

  public visitFuncExpr(ctx: FuncExprContext) {
    return this.visit(ctx.funcCall())
  }

  public visitListExpr(ctx: ListExprContext) {
    return this.visit(ctx.list())
  }

  public visitRecordExpr(ctx: RecordExprContext) {
    return this.visit(ctx.record())
  }

  public visitLogicExpression(ctx: LogicExpressionContext) {
    const left = this.visit<BooleanLiteral>(ctx._left)
    const op = ctx._op
    const right = this.visit<BooleanLiteral>(ctx._right)

    return new BinaryExpression(left, op.text, right)
  }

  public visitBinaryExpression(ctx: BinaryExpressionContext) {
    this.log("binary expression visited", ctx.text)

    const left = this.visit<NumberLiteral | StringLiteral>(ctx._left)
    const op = ctx._op
    const right = this.visit<NumberLiteral | StringLiteral>(ctx._right)
    let operator

    if (["<>"].includes(op.text)) operator = "+"
    else if (["+", "-", "*", "/"].includes(op.text)) operator = op.text
    else if (["++"].includes(op.text))
      return new CallExpression(
        new MemberExpression(new ArrayExpression([]), new Identifier("concat")),
        [left, right]
      )

    if (!operator) {
      throw new SyntaxError(`Unknown identifier ${op.text}`)
    }

    return new BinaryExpression(left, operator, right)
  }

  public visitConstDeclaration(ctx: ConstDeclarationContext) {
    const name = ctx._name
    const type = ctx._type
    const expression = this.visit(ctx.expression())

    typed[name.text] = type ? type.text : "any"

    return new VariableDeclaration(new Identifier(name.text), expression)
  }

  public visitFuncDeclaration(ctx: FuncDeclarationContext) {
    const name = ctx._name
    let params = ctx.funcParams() ? this.visit<any[]>(ctx.funcParams()) : []
    const expressions = this.visit<any[]>(ctx.block())
    const last = expressions.pop()
    const returning = new ReturnStatement(last)

    return new ExportNamedDeclaration(
      new FunctionDeclaration(
        new Identifier(name.text),
        params,
        new Block([].concat(expressions, returning))
      )
    )
  }

  public visitFuncCall(ctx: FuncCallContext) {
    const params = ctx.expression().map(ex => this.visit(ex))
    const name = ctx._name
    const member = ctx._member

    if (name) {
      return new CallExpression(new Identifier(name.text), params || [])
    } else if (member) {
      const m = this.visit<any>(ctx.memberExpression())
      return new CallExpression(m, params || [])
    }
  }

  public visitFuncParams(ctx: FuncParamsContext) {
    const id = ctx._id
    let params = ctx.funcParams() ? this.visit(ctx.funcParams()) : []

    return [].concat(params, new Identifier(id.text))
  }

  public visitMemberExpression(ctx: MemberExpressionContext) {
    const prop = ctx._property
    const obj = ctx._object
    const member = ctx.memberExpression()
      ? this.visit<Identifier>(ctx.memberExpression())
      : null

    const first = obj ? new Identifier(ctx._object.text) : member
    return new MemberExpression(first, new Identifier(prop.text))
  }

  public visitLambda(ctx: LambdaContext) {
    let params = ctx.funcParams() ? this.visit(ctx.funcParams()) : []
    const body = this.visit(ctx.expression())

    return new ArrowFunctionExpression(null, params, body)
  }

  public visitLambdaCall(ctx: LambdaCallContext) {
    const name = ctx._name
    const params = ctx.expression().map(ex => this.visit(ex))

    return new CallExpression(new Identifier(name.text), params)
  }

  public visitImportStatement(ctx: ImportStatementContext) {
    const core = ctx._core
    const source = ctx._source
    const name = ctx._name

    if (core) {
      return new ImportDeclaration(
        new StringLiteral("core/" + core.text),
        new Identifier(name ? name.text : core.text)
      )
    } else if (source) {
      return new ImportDeclaration(
        new StringLiteral(source.text),
        new Identifier(name.text)
      )
    }
  }

  public visitList(ctx: ListContext) {
    const expressions = ctx.expression().map(x => this.visit(x))

    return new ArrayExpression(expressions)
  }

  public visitRecord(ctx: RecordContext) {
    const pairs = ctx.keyValue().map(x => this.visit(x))

    return new ObjectExpression(pairs)
  }

  public visitKeyValue(ctx: KeyValueContext) {
    const key = ctx._key
    const value = this.visit(ctx.expression())

    return new Property(new Identifier(key.text), value)
  }
}
