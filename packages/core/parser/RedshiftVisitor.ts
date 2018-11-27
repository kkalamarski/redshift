// Generated from ./parser/Redshift.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { BinaryExpressionContext } from './RedshiftParser';
import { RecordExprContext } from './RedshiftParser';
import { FuncExprContext } from './RedshiftParser';
import { LambdaExprContext } from './RedshiftParser';
import { MemberExprContext } from './RedshiftParser';
import { LogicExpressionContext } from './RedshiftParser';
import { AtomExprContext } from './RedshiftParser';
import { ListExprContext } from './RedshiftParser';
import { ProgramContext } from './RedshiftParser';
import { StatementContext } from './RedshiftParser';
import { BlockContext } from './RedshiftParser';
import { ExpressionContext } from './RedshiftParser';
import { ConstDeclarationContext } from './RedshiftParser';
import { FuncDeclarationContext } from './RedshiftParser';
import { LambdaContext } from './RedshiftParser';
import { LambdaCallContext } from './RedshiftParser';
import { FuncCallContext } from './RedshiftParser';
import { FuncParamsContext } from './RedshiftParser';
import { MemberExpressionContext } from './RedshiftParser';
import { ListContext } from './RedshiftParser';
import { RecordContext } from './RedshiftParser';
import { KeyValueContext } from './RedshiftParser';
import { ImportStatementContext } from './RedshiftParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RedshiftParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RedshiftVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `binaryExpression`
	 * labeled alternative in `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryExpression?: (ctx: BinaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `recordExpr`
	 * labeled alternative in `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordExpr?: (ctx: RecordExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcExpr`
	 * labeled alternative in `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncExpr?: (ctx: FuncExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambdaExpr`
	 * labeled alternative in `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpr?: (ctx: LambdaExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `memberExpr`
	 * labeled alternative in `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberExpr?: (ctx: MemberExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicExpression`
	 * labeled alternative in `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicExpression?: (ctx: LogicExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `atomExpr`
	 * labeled alternative in `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpr?: (ctx: AtomExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `listExpr`
	 * labeled alternative in `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpr?: (ctx: ListExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.constDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDeclaration?: (ctx: ConstDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.funcDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDeclaration?: (ctx: FuncDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.lambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.lambdaCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaCall?: (ctx: LambdaCallContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.funcCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncCall?: (ctx: FuncCallContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.funcParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncParams?: (ctx: FuncParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.memberExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberExpression?: (ctx: MemberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecord?: (ctx: RecordContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.keyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValue?: (ctx: KeyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `RedshiftParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;
}

