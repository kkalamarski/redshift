// Generated from ./parser/Redshift.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { RedshiftVisitor } from './RedshiftVisitor';


export class RedshiftParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly T__25=26;
	public static readonly T__26=27;
	public static readonly T__27=28;
	public static readonly NUMBER=29;
	public static readonly STRING=30;
	public static readonly BOOLEAN=31;
	public static readonly IDENTIFIER=32;
	public static readonly WS=33;
	public static readonly NEWLINE=34;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_constDeclaration = 4;
	public static readonly RULE_funcDeclaration = 5;
	public static readonly RULE_lambda = 6;
	public static readonly RULE_lambdaCall = 7;
	public static readonly RULE_funcCall = 8;
	public static readonly RULE_funcParams = 9;
	public static readonly RULE_memberExpression = 10;
	public static readonly RULE_list = 11;
	public static readonly RULE_record = 12;
	public static readonly RULE_keyValue = 13;
	public static readonly RULE_importStatement = 14;
	public static readonly ruleNames: string[] = [
		"program", "statement", "block", "expression", "constDeclaration", "funcDeclaration", 
		"lambda", "lambdaCall", "funcCall", "funcParams", "memberExpression", 
		"list", "record", "keyValue", "importStatement"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'==='", "'>'", "'<'", "'<='", "'>='", "'*'", "'/'", "'+'", 
		"'-'", "'<>'", "'++'", "'let'", "':'", "'='", "'def'", "'do'", "'end'", 
		"'('", "')'", "'->'", "'.'", "','", "'['", "']'", "'{'", "'}'", "'import'", 
		"'as'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "NUMBER", "STRING", "BOOLEAN", "IDENTIFIER", "WS", "NEWLINE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RedshiftParser._LITERAL_NAMES, RedshiftParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return RedshiftParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Redshift.g4"; }

	@Override
	public get ruleNames(): string[] { return RedshiftParser.ruleNames; }

	@Override
	public get serializedATN(): string { return RedshiftParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RedshiftParser._ATN, this);
	}
	@RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RedshiftParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (RedshiftParser.T__11 - 12)) | (1 << (RedshiftParser.T__14 - 12)) | (1 << (RedshiftParser.T__17 - 12)) | (1 << (RedshiftParser.T__22 - 12)) | (1 << (RedshiftParser.T__24 - 12)) | (1 << (RedshiftParser.T__26 - 12)) | (1 << (RedshiftParser.NUMBER - 12)) | (1 << (RedshiftParser.STRING - 12)) | (1 << (RedshiftParser.BOOLEAN - 12)) | (1 << (RedshiftParser.IDENTIFIER - 12)))) !== 0)) {
				{
				{
				this.state = 30;
				this.statement();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this.match(RedshiftParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RedshiftParser.RULE_statement);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedshiftParser.T__17:
			case RedshiftParser.T__22:
			case RedshiftParser.T__24:
			case RedshiftParser.NUMBER:
			case RedshiftParser.STRING:
			case RedshiftParser.BOOLEAN:
			case RedshiftParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.expression(0);
				}
				break;
			case RedshiftParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.constDeclaration();
				}
				break;
			case RedshiftParser.T__14:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 40;
				this.funcDeclaration();
				}
				break;
			case RedshiftParser.T__26:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 41;
				this.importStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RedshiftParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 46;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RedshiftParser.T__17:
				case RedshiftParser.T__22:
				case RedshiftParser.T__24:
				case RedshiftParser.NUMBER:
				case RedshiftParser.STRING:
				case RedshiftParser.BOOLEAN:
				case RedshiftParser.IDENTIFIER:
					{
					this.state = 44;
					this.expression(0);
					}
					break;
				case RedshiftParser.T__11:
					{
					this.state = 45;
					this.constDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 48; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( ((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (RedshiftParser.T__11 - 12)) | (1 << (RedshiftParser.T__17 - 12)) | (1 << (RedshiftParser.T__22 - 12)) | (1 << (RedshiftParser.T__24 - 12)) | (1 << (RedshiftParser.NUMBER - 12)) | (1 << (RedshiftParser.STRING - 12)) | (1 << (RedshiftParser.BOOLEAN - 12)) | (1 << (RedshiftParser.IDENTIFIER - 12)))) !== 0) );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, RedshiftParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
			case 1:
				{
				_localctx = new FuncExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 51;
				(_localctx as FuncExprContext)._func = this.funcCall();
				}
				break;

			case 2:
				{
				_localctx = new LambdaExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 52;
				(_localctx as LambdaExprContext)._lambdaD = this.lambda();
				}
				break;

			case 3:
				{
				_localctx = new LambdaExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 53;
				(_localctx as LambdaExprContext)._lambdaC = this.lambdaCall();
				}
				break;

			case 4:
				{
				_localctx = new MemberExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				(_localctx as MemberExprContext)._member = this.memberExpression(0);
				}
				break;

			case 5:
				{
				_localctx = new ListExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 55;
				(_localctx as ListExprContext)._atom = this.list();
				}
				break;

			case 6:
				{
				_localctx = new RecordExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 56;
				(_localctx as RecordExprContext)._atom = this.record();
				}
				break;

			case 7:
				{
				_localctx = new AtomExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 57;
				(_localctx as AtomExprContext)._atom = this.match(RedshiftParser.NUMBER);
				}
				break;

			case 8:
				{
				_localctx = new AtomExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 58;
				(_localctx as AtomExprContext)._atom = this.match(RedshiftParser.BOOLEAN);
				}
				break;

			case 9:
				{
				_localctx = new AtomExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 59;
				(_localctx as AtomExprContext)._atom = this.match(RedshiftParser.IDENTIFIER);
				}
				break;

			case 10:
				{
				_localctx = new AtomExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 60;
				(_localctx as AtomExprContext)._atom = this.match(RedshiftParser.STRING);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 77;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 75;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,5,this._ctx) ) {
					case 1:
						{
						_localctx = new LogicExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, RedshiftParser.RULE_expression);
						this.state = 63;
						if (!(this.precpred(this._ctx, 14))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						this.state = 64;
						(_localctx as LogicExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedshiftParser.T__0) | (1 << RedshiftParser.T__1) | (1 << RedshiftParser.T__2) | (1 << RedshiftParser.T__3) | (1 << RedshiftParser.T__4))) !== 0)) ) {
							(_localctx as LogicExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 65;
						(_localctx as LogicExpressionContext)._right = this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, RedshiftParser.RULE_expression);
						this.state = 66;
						if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						this.state = 67;
						(_localctx as BinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===RedshiftParser.T__5 || _la===RedshiftParser.T__6) ) {
							(_localctx as BinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 68;
						(_localctx as BinaryExpressionContext)._right = this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, RedshiftParser.RULE_expression);
						this.state = 69;
						if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						this.state = 70;
						(_localctx as BinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===RedshiftParser.T__7 || _la===RedshiftParser.T__8) ) {
							(_localctx as BinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 71;
						(_localctx as BinaryExpressionContext)._right = this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, RedshiftParser.RULE_expression);
						this.state = 72;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 73;
						(_localctx as BinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===RedshiftParser.T__9 || _la===RedshiftParser.T__10) ) {
							(_localctx as BinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 74;
						(_localctx as BinaryExpressionContext)._right = this.expression(12);
						}
						break;
					}
					} 
				}
				this.state = 79;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RedshiftParser.RULE_constDeclaration);
		try {
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,7,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.match(RedshiftParser.T__11);
				this.state = 81;
				_localctx._name = this.match(RedshiftParser.IDENTIFIER);
				this.state = 82;
				this.match(RedshiftParser.T__12);
				this.state = 83;
				_localctx._type = this.match(RedshiftParser.IDENTIFIER);
				this.state = 84;
				this.match(RedshiftParser.T__13);
				this.state = 85;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.match(RedshiftParser.T__11);
				this.state = 87;
				_localctx._name = this.match(RedshiftParser.IDENTIFIER);
				this.state = 88;
				this.match(RedshiftParser.T__13);
				this.state = 89;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public funcDeclaration(): FuncDeclarationContext {
		let _localctx: FuncDeclarationContext = new FuncDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RedshiftParser.RULE_funcDeclaration);
		let _la: number;
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				this.match(RedshiftParser.T__14);
				this.state = 93;
				_localctx._name = this.match(RedshiftParser.IDENTIFIER);
				this.state = 94;
				this.match(RedshiftParser.T__15);
				this.state = 95;
				this.block();
				this.state = 96;
				this.match(RedshiftParser.T__16);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.match(RedshiftParser.T__14);
				this.state = 99;
				_localctx._name = this.match(RedshiftParser.IDENTIFIER);
				this.state = 100;
				this.match(RedshiftParser.T__17);
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===RedshiftParser.IDENTIFIER) {
					{
					this.state = 101;
					this.funcParams(0);
					}
				}

				this.state = 104;
				this.match(RedshiftParser.T__18);
				this.state = 105;
				this.match(RedshiftParser.T__15);
				this.state = 106;
				this.block();
				this.state = 107;
				this.match(RedshiftParser.T__16);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RedshiftParser.RULE_lambda);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(RedshiftParser.T__17);
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===RedshiftParser.IDENTIFIER) {
				{
				this.state = 112;
				this.funcParams(0);
				}
			}

			this.state = 115;
			this.match(RedshiftParser.T__18);
			this.state = 116;
			this.match(RedshiftParser.T__19);
			this.state = 117;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdaCall(): LambdaCallContext {
		let _localctx: LambdaCallContext = new LambdaCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RedshiftParser.RULE_lambdaCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			_localctx._name = this.match(RedshiftParser.IDENTIFIER);
			this.state = 120;
			this.match(RedshiftParser.T__20);
			this.state = 121;
			this.match(RedshiftParser.T__17);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (RedshiftParser.T__17 - 18)) | (1 << (RedshiftParser.T__22 - 18)) | (1 << (RedshiftParser.T__24 - 18)) | (1 << (RedshiftParser.NUMBER - 18)) | (1 << (RedshiftParser.STRING - 18)) | (1 << (RedshiftParser.BOOLEAN - 18)) | (1 << (RedshiftParser.IDENTIFIER - 18)))) !== 0)) {
				{
				{
				this.state = 122;
				this.expression(0);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===RedshiftParser.T__21) {
					{
					this.state = 123;
					this.match(RedshiftParser.T__21);
					}
				}

				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this.match(RedshiftParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public funcCall(): FuncCallContext {
		let _localctx: FuncCallContext = new FuncCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RedshiftParser.RULE_funcCall);
		let _la: number;
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 133;
				_localctx._name = this.match(RedshiftParser.IDENTIFIER);
				this.state = 134;
				this.match(RedshiftParser.T__17);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (RedshiftParser.T__17 - 18)) | (1 << (RedshiftParser.T__22 - 18)) | (1 << (RedshiftParser.T__24 - 18)) | (1 << (RedshiftParser.NUMBER - 18)) | (1 << (RedshiftParser.STRING - 18)) | (1 << (RedshiftParser.BOOLEAN - 18)) | (1 << (RedshiftParser.IDENTIFIER - 18)))) !== 0)) {
					{
					{
					this.state = 135;
					this.expression(0);
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===RedshiftParser.T__21) {
						{
						this.state = 136;
						this.match(RedshiftParser.T__21);
						}
					}

					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 144;
				this.match(RedshiftParser.T__18);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				_localctx._member = this.memberExpression(0);
				this.state = 146;
				this.match(RedshiftParser.T__17);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (RedshiftParser.T__17 - 18)) | (1 << (RedshiftParser.T__22 - 18)) | (1 << (RedshiftParser.T__24 - 18)) | (1 << (RedshiftParser.NUMBER - 18)) | (1 << (RedshiftParser.STRING - 18)) | (1 << (RedshiftParser.BOOLEAN - 18)) | (1 << (RedshiftParser.IDENTIFIER - 18)))) !== 0)) {
					{
					{
					this.state = 147;
					this.expression(0);
					this.state = 149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===RedshiftParser.T__21) {
						{
						this.state = 148;
						this.match(RedshiftParser.T__21);
						}
					}

					}
					}
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 156;
				this.match(RedshiftParser.T__18);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public funcParams(): FuncParamsContext;
	public funcParams(_p: number): FuncParamsContext;
	@RuleVersion(0)
	public funcParams(_p?: number): FuncParamsContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: FuncParamsContext = new FuncParamsContext(this._ctx, _parentState);
		let _prevctx: FuncParamsContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, RedshiftParser.RULE_funcParams, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 161;
			_localctx._id = this.match(RedshiftParser.IDENTIFIER);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,18,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new FuncParamsContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, RedshiftParser.RULE_funcParams);
					this.state = 163;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 164;
					this.match(RedshiftParser.T__21);
					this.state = 165;
					_localctx._id = this.match(RedshiftParser.IDENTIFIER);
					}
					} 
				}
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,18,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public memberExpression(): MemberExpressionContext;
	public memberExpression(_p: number): MemberExpressionContext;
	@RuleVersion(0)
	public memberExpression(_p?: number): MemberExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MemberExpressionContext = new MemberExpressionContext(this._ctx, _parentState);
		let _prevctx: MemberExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, RedshiftParser.RULE_memberExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 172;
			_localctx._object = this.match(RedshiftParser.IDENTIFIER);
			this.state = 173;
			this.match(RedshiftParser.T__20);
			this.state = 174;
			_localctx._property = this.match(RedshiftParser.IDENTIFIER);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 181;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,19,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new MemberExpressionContext(_parentctx, _parentState);
					_localctx._member = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, RedshiftParser.RULE_memberExpression);
					this.state = 176;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 177;
					this.match(RedshiftParser.T__20);
					this.state = 178;
					_localctx._property = this.match(RedshiftParser.IDENTIFIER);
					}
					} 
				}
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,19,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RedshiftParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(RedshiftParser.T__22);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (RedshiftParser.T__17 - 18)) | (1 << (RedshiftParser.T__22 - 18)) | (1 << (RedshiftParser.T__24 - 18)) | (1 << (RedshiftParser.NUMBER - 18)) | (1 << (RedshiftParser.STRING - 18)) | (1 << (RedshiftParser.BOOLEAN - 18)) | (1 << (RedshiftParser.IDENTIFIER - 18)))) !== 0)) {
				{
				{
				this.state = 185;
				this.expression(0);
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===RedshiftParser.T__21) {
					{
					this.state = 186;
					this.match(RedshiftParser.T__21);
					}
				}

				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 194;
			this.match(RedshiftParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public record(): RecordContext {
		let _localctx: RecordContext = new RecordContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RedshiftParser.RULE_record);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(RedshiftParser.T__24);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===RedshiftParser.IDENTIFIER) {
				{
				{
				this.state = 197;
				this.keyValue();
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===RedshiftParser.T__21) {
					{
					this.state = 198;
					this.match(RedshiftParser.T__21);
					}
				}

				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
			this.match(RedshiftParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyValue(): KeyValueContext {
		let _localctx: KeyValueContext = new KeyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RedshiftParser.RULE_keyValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			_localctx._key = this.match(RedshiftParser.IDENTIFIER);
			this.state = 209;
			this.match(RedshiftParser.T__13);
			this.state = 210;
			_localctx._value = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RedshiftParser.RULE_importStatement);
		try {
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 212;
				this.match(RedshiftParser.T__26);
				this.state = 213;
				_localctx._core = this.match(RedshiftParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.match(RedshiftParser.T__26);
				this.state = 215;
				_localctx._core = this.match(RedshiftParser.IDENTIFIER);
				this.state = 216;
				this.match(RedshiftParser.T__27);
				this.state = 217;
				_localctx._name = this.match(RedshiftParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 218;
				this.match(RedshiftParser.T__26);
				this.state = 219;
				_localctx._source = this.match(RedshiftParser.STRING);
				this.state = 220;
				this.match(RedshiftParser.T__27);
				this.state = 221;
				_localctx._name = this.match(RedshiftParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 9:
			return this.funcParams_sempred(_localctx as FuncParamsContext, predIndex);

		case 10:
			return this.memberExpression_sempred(_localctx as MemberExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);

		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 12);

		case 3:
			return this.precpred(this._ctx, 11);
		}
		return true;
	}
	private funcParams_sempred(_localctx: FuncParamsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private memberExpression_sempred(_localctx: MemberExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03$\xE3\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x07\x02\"\n\x02\f\x02\x0E"+
		"\x02%\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03-\n"+
		"\x03\x03\x04\x03\x04\x06\x041\n\x04\r\x04\x0E\x042\x03\x05\x03\x05\x03"+
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05"+
		"\x05@\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03"+
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05N\n\x05\f\x05\x0E\x05Q\v\x05"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x05\x06]\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07i\n\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x05\x07p\n\x07\x03\b\x03\b\x05\bt\n\b\x03\b\x03\b\x03"+
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x7F\n\t\x07\t\x81\n\t\f\t"+
		"\x0E\t\x84\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\x8C\n\n\x07\n"+
		"\x8E\n\n\f\n\x0E\n\x91\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x98\n\n"+
		"\x07\n\x9A\n\n\f\n\x0E\n\x9D\v\n\x03\n\x03\n\x05\n\xA1\n\n\x03\v\x03\v"+
		"\x03\v\x03\v\x03\v\x03\v\x07\v\xA9\n\v\f\v\x0E\v\xAC\v\v\x03\f\x03\f\x03"+
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xB6\n\f\f\f\x0E\f\xB9\v\f\x03\r"+
		"\x03\r\x03\r\x05\r\xBE\n\r\x07\r\xC0\n\r\f\r\x0E\r\xC3\v\r\x03\r\x03\r"+
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xCA\n\x0E\x07\x0E\xCC\n\x0E\f\x0E\x0E"+
		"\x0E\xCF\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10"+
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10"+
		"\x05\x10\xE1\n\x10\x03\x10\x02\x02\x05\b\x14\x16\x11\x02\x02\x04\x02\x06"+
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02"+
		"\x1A\x02\x1C\x02\x1E\x02\x02\x06\x03\x02\x03\x07\x03\x02\b\t\x03\x02\n"+
		"\v\x03\x02\f\r\xF9\x02#\x03\x02\x02\x02\x04,\x03\x02\x02\x02\x060\x03"+
		"\x02\x02\x02\b?\x03\x02\x02\x02\n\\\x03\x02\x02\x02\fo\x03\x02\x02\x02"+
		"\x0Eq\x03\x02\x02\x02\x10y\x03\x02\x02\x02\x12\xA0\x03\x02\x02\x02\x14"+
		"\xA2\x03\x02\x02\x02\x16\xAD\x03\x02\x02\x02\x18\xBA\x03\x02\x02\x02\x1A"+
		"\xC6\x03\x02\x02\x02\x1C\xD2\x03\x02\x02\x02\x1E\xE0\x03\x02\x02\x02 "+
		"\"\x05\x04\x03\x02! \x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02"+
		"\x02#$\x03\x02\x02\x02$&\x03\x02\x02\x02%#\x03\x02\x02\x02&\'\x07\x02"+
		"\x02\x03\'\x03\x03\x02\x02\x02(-\x05\b\x05\x02)-\x05\n\x06\x02*-\x05\f"+
		"\x07\x02+-\x05\x1E\x10\x02,(\x03\x02\x02\x02,)\x03\x02\x02\x02,*\x03\x02"+
		"\x02\x02,+\x03\x02\x02\x02-\x05\x03\x02\x02\x02.1\x05\b\x05\x02/1\x05"+
		"\n\x06\x020.\x03\x02\x02\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03"+
		"\x02\x02\x0223\x03\x02\x02\x023\x07\x03\x02\x02\x0245\b\x05\x01\x025@"+
		"\x05\x12\n\x026@\x05\x0E\b\x027@\x05\x10\t\x028@\x05\x16\f\x029@\x05\x18"+
		"\r\x02:@\x05\x1A\x0E\x02;@\x07\x1F\x02\x02<@\x07!\x02\x02=@\x07\"\x02"+
		"\x02>@\x07 \x02\x02?4\x03\x02\x02\x02?6\x03\x02\x02\x02?7\x03\x02\x02"+
		"\x02?8\x03\x02\x02\x02?9\x03\x02\x02\x02?:\x03\x02\x02\x02?;\x03\x02\x02"+
		"\x02?<\x03\x02\x02\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@O\x03\x02\x02"+
		"\x02AB\f\x10\x02\x02BC\t\x02\x02\x02CN\x05\b\x05\x11DE\f\x0F\x02\x02E"+
		"F\t\x03\x02\x02FN\x05\b\x05\x10GH\f\x0E\x02\x02HI\t\x04\x02\x02IN\x05"+
		"\b\x05\x0FJK\f\r\x02\x02KL\t\x05\x02\x02LN\x05\b\x05\x0EMA\x03\x02\x02"+
		"\x02MD\x03\x02\x02\x02MG\x03\x02\x02\x02MJ\x03\x02\x02\x02NQ\x03\x02\x02"+
		"\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02P\t\x03\x02\x02\x02QO\x03\x02"+
		"\x02\x02RS\x07\x0E\x02\x02ST\x07\"\x02\x02TU\x07\x0F\x02\x02UV\x07\"\x02"+
		"\x02VW\x07\x10\x02\x02W]\x05\b\x05\x02XY\x07\x0E\x02\x02YZ\x07\"\x02\x02"+
		"Z[\x07\x10\x02\x02[]\x05\b\x05\x02\\R\x03\x02\x02\x02\\X\x03\x02\x02\x02"+
		"]\v\x03\x02\x02\x02^_\x07\x11\x02\x02_`\x07\"\x02\x02`a\x07\x12\x02\x02"+
		"ab\x05\x06\x04\x02bc\x07\x13\x02\x02cp\x03\x02\x02\x02de\x07\x11\x02\x02"+
		"ef\x07\"\x02\x02fh\x07\x14\x02\x02gi\x05\x14\v\x02hg\x03\x02\x02\x02h"+
		"i\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x07\x15\x02\x02kl\x07\x12\x02\x02"+
		"lm\x05\x06\x04\x02mn\x07\x13\x02\x02np\x03\x02\x02\x02o^\x03\x02\x02\x02"+
		"od\x03\x02\x02\x02p\r\x03\x02\x02\x02qs\x07\x14\x02\x02rt\x05\x14\v\x02"+
		"sr\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x07\x15\x02\x02"+
		"vw\x07\x16\x02\x02wx\x05\b\x05\x02x\x0F\x03\x02\x02\x02yz\x07\"\x02\x02"+
		"z{\x07\x17\x02\x02{\x82\x07\x14\x02\x02|~\x05\b\x05\x02}\x7F\x07\x18\x02"+
		"\x02~}\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80"+
		"|\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82"+
		"\x83\x03\x02\x02\x02\x83\x85\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x85"+
		"\x86\x07\x15\x02\x02\x86\x11\x03\x02\x02\x02\x87\x88\x07\"\x02\x02\x88"+
		"\x8F\x07\x14\x02\x02\x89\x8B\x05\b\x05\x02\x8A\x8C\x07\x18\x02\x02\x8B"+
		"\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D"+
		"\x89\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F"+
		"\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92"+
		"\xA1\x07\x15\x02\x02\x93\x94\x05\x16\f\x02\x94\x9B\x07\x14\x02\x02\x95"+
		"\x97\x05\b\x05\x02\x96\x98\x07\x18\x02\x02\x97\x96\x03\x02\x02\x02\x97"+
		"\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x95\x03\x02\x02\x02\x9A"+
		"\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C"+
		"\x9E\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\x9F\x07\x15\x02\x02\x9F"+
		"\xA1\x03\x02\x02\x02\xA0\x87\x03\x02\x02\x02\xA0\x93\x03\x02\x02\x02\xA1"+
		"\x13\x03\x02\x02\x02\xA2\xA3\b\v\x01\x02\xA3\xA4\x07\"\x02\x02\xA4\xAA"+
		"\x03\x02\x02\x02\xA5\xA6\f\x03\x02\x02\xA6\xA7\x07\x18\x02\x02\xA7\xA9"+
		"\x07\"\x02\x02\xA8\xA5\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8"+
		"\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\x15\x03\x02\x02\x02\xAC\xAA"+
		"\x03\x02\x02\x02\xAD\xAE\b\f\x01\x02\xAE\xAF\x07\"\x02\x02\xAF\xB0\x07"+
		"\x17\x02\x02\xB0\xB1\x07\"\x02\x02\xB1\xB7\x03\x02\x02\x02\xB2\xB3\f\x03"+
		"\x02\x02\xB3\xB4\x07\x17\x02\x02\xB4\xB6\x07\"\x02\x02\xB5\xB2\x03\x02"+
		"\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02"+
		"\x02\x02\xB8\x17\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xC1\x07\x19"+
		"\x02\x02\xBB\xBD\x05\b\x05\x02\xBC\xBE\x07\x18\x02\x02\xBD\xBC\x03\x02"+
		"\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBB\x03\x02"+
		"\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02"+
		"\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC5\x07\x1A"+
		"\x02\x02\xC5\x19\x03\x02\x02\x02\xC6\xCD\x07\x1B\x02\x02\xC7\xC9\x05\x1C"+
		"\x0F\x02\xC8\xCA\x07\x18\x02\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02"+
		"\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB\xC7\x03\x02\x02\x02\xCC\xCF\x03\x02"+
		"\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02"+
		"\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1\x07\x1C\x02\x02\xD1\x1B\x03\x02"+
		"\x02\x02\xD2\xD3\x07\"\x02\x02\xD3\xD4\x07\x10\x02\x02\xD4\xD5\x05\b\x05"+
		"\x02\xD5\x1D\x03\x02\x02\x02\xD6\xD7\x07\x1D\x02\x02\xD7\xE1\x07\"\x02"+
		"\x02\xD8\xD9\x07\x1D\x02\x02\xD9\xDA\x07\"\x02\x02\xDA\xDB\x07\x1E\x02"+
		"\x02\xDB\xE1\x07\"\x02\x02\xDC\xDD\x07\x1D\x02\x02\xDD\xDE\x07 \x02\x02"+
		"\xDE\xDF\x07\x1E\x02\x02\xDF\xE1\x07\"\x02\x02\xE0\xD6\x03\x02\x02\x02"+
		"\xE0\xD8\x03\x02\x02\x02\xE0\xDC\x03\x02\x02\x02\xE1\x1F\x03\x02\x02\x02"+
		"\x1B#,02?MO\\hos~\x82\x8B\x8F\x97\x9B\xA0\xAA\xB7\xBD\xC1\xC9\xCD\xE0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RedshiftParser.__ATN) {
			RedshiftParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RedshiftParser._serializedATN));
		}

		return RedshiftParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RedshiftParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_program; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitProgram) return visitor.visitProgram(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public funcDeclaration(): FuncDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FuncDeclarationContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_statement; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class BlockContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public constDeclaration(): ConstDeclarationContext[];
	public constDeclaration(i: number): ConstDeclarationContext;
	public constDeclaration(i?: number): ConstDeclarationContext | ConstDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstDeclarationContext);
		} else {
			return this.getRuleContext(i, ConstDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_block; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitBlock) return visitor.visitBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_expression; }
 
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BinaryExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _op: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitBinaryExpression) return visitor.visitBinaryExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class RecordExprContext extends ExpressionContext {
	public _atom: RecordContext;
	public record(): RecordContext {
		return this.getRuleContext(0, RecordContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitRecordExpr) return visitor.visitRecordExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class FuncExprContext extends ExpressionContext {
	public _func: FuncCallContext;
	public funcCall(): FuncCallContext {
		return this.getRuleContext(0, FuncCallContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitFuncExpr) return visitor.visitFuncExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class LambdaExprContext extends ExpressionContext {
	public _lambdaD: LambdaContext;
	public _lambdaC: LambdaCallContext;
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	public lambdaCall(): LambdaCallContext | undefined {
		return this.tryGetRuleContext(0, LambdaCallContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitLambdaExpr) return visitor.visitLambdaExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class MemberExprContext extends ExpressionContext {
	public _member: MemberExpressionContext;
	public memberExpression(): MemberExpressionContext {
		return this.getRuleContext(0, MemberExpressionContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitMemberExpr) return visitor.visitMemberExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class LogicExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _op: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitLogicExpression) return visitor.visitLogicExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class AtomExprContext extends ExpressionContext {
	public _atom: Token;
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(RedshiftParser.NUMBER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(RedshiftParser.BOOLEAN, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RedshiftParser.IDENTIFIER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(RedshiftParser.STRING, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitAtomExpr) return visitor.visitAtomExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class ListExprContext extends ExpressionContext {
	public _atom: ListContext;
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitListExpr) return visitor.visitListExpr(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	public _name: Token;
	public _type: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedshiftParser.IDENTIFIER);
		} else {
			return this.getToken(RedshiftParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_constDeclaration; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitConstDeclaration) return visitor.visitConstDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class FuncDeclarationContext extends ParserRuleContext {
	public _name: Token;
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(RedshiftParser.IDENTIFIER, 0); }
	public funcParams(): FuncParamsContext | undefined {
		return this.tryGetRuleContext(0, FuncParamsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_funcDeclaration; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitFuncDeclaration) return visitor.visitFuncDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public funcParams(): FuncParamsContext | undefined {
		return this.tryGetRuleContext(0, FuncParamsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_lambda; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitLambda) return visitor.visitLambda(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaCallContext extends ParserRuleContext {
	public _name: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(RedshiftParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_lambdaCall; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitLambdaCall) return visitor.visitLambdaCall(this);
		else return visitor.visitChildren(this);
	}
}


export class FuncCallContext extends ParserRuleContext {
	public _name: Token;
	public _member: MemberExpressionContext;
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RedshiftParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public memberExpression(): MemberExpressionContext | undefined {
		return this.tryGetRuleContext(0, MemberExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_funcCall; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitFuncCall) return visitor.visitFuncCall(this);
		else return visitor.visitChildren(this);
	}
}


export class FuncParamsContext extends ParserRuleContext {
	public _id: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(RedshiftParser.IDENTIFIER, 0); }
	public funcParams(): FuncParamsContext | undefined {
		return this.tryGetRuleContext(0, FuncParamsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_funcParams; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitFuncParams) return visitor.visitFuncParams(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberExpressionContext extends ParserRuleContext {
	public _member: MemberExpressionContext;
	public _object: Token;
	public _property: Token;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedshiftParser.IDENTIFIER);
		} else {
			return this.getToken(RedshiftParser.IDENTIFIER, i);
		}
	}
	public memberExpression(): MemberExpressionContext | undefined {
		return this.tryGetRuleContext(0, MemberExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_memberExpression; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitMemberExpression) return visitor.visitMemberExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_list; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitList) return visitor.visitList(this);
		else return visitor.visitChildren(this);
	}
}


export class RecordContext extends ParserRuleContext {
	public keyValue(): KeyValueContext[];
	public keyValue(i: number): KeyValueContext;
	public keyValue(i?: number): KeyValueContext | KeyValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyValueContext);
		} else {
			return this.getRuleContext(i, KeyValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_record; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitRecord) return visitor.visitRecord(this);
		else return visitor.visitChildren(this);
	}
}


export class KeyValueContext extends ParserRuleContext {
	public _key: Token;
	public _value: ExpressionContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(RedshiftParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_keyValue; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitKeyValue) return visitor.visitKeyValue(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public _core: Token;
	public _name: Token;
	public _source: Token;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RedshiftParser.IDENTIFIER);
		} else {
			return this.getToken(RedshiftParser.IDENTIFIER, i);
		}
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(RedshiftParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RedshiftParser.RULE_importStatement; }
	@Override
	public accept<Result>(visitor: RedshiftVisitor<Result>): Result {
		if (visitor.visitImportStatement) return visitor.visitImportStatement(this);
		else return visitor.visitChildren(this);
	}
}


