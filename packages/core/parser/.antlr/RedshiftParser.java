// Generated from c:\Users\kkala\Projects\redshift\packages\core\parser\Redshift.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RedshiftParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, NUMBER=31, 
		STRING=32, BOOLEAN=33, IDENTIFIER=34, WS=35, NEWLINE=36;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_block = 2, RULE_expression = 3, 
		RULE_aliased = 4, RULE_expose = 5, RULE_constDeclaration = 6, RULE_funcDeclaration = 7, 
		RULE_lambda = 8, RULE_lambdaCall = 9, RULE_funcCall = 10, RULE_funcParams = 11, 
		RULE_memberExpression = 12, RULE_list = 13, RULE_record = 14, RULE_keyValue = 15, 
		RULE_importStatement = 16;
	public static final String[] ruleNames = {
		"program", "statement", "block", "expression", "aliased", "expose", "constDeclaration", 
		"funcDeclaration", "lambda", "lambdaCall", "funcCall", "funcParams", "memberExpression", 
		"list", "record", "keyValue", "importStatement"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'==='", "'>'", "'<'", "'<='", "'>='", "'*'", "'/'", "'+'", "'-'", 
		"'<>'", "'++'", "'('", "','", "')'", "'expose'", "'from'", "'let'", "':'", 
		"'='", "'def'", "'do'", "'end'", "'->'", "'.'", "'['", "']'", "'{'", "'}'", 
		"'import'", "'as'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, "NUMBER", "STRING", "BOOLEAN", 
		"IDENTIFIER", "WS", "NEWLINE"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Redshift.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RedshiftParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(RedshiftParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__16) | (1L << T__19) | (1L << T__28))) != 0)) {
				{
				{
				setState(34);
				statement();
				}
				}
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(40);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public ExposeContext expose() {
			return getRuleContext(ExposeContext.class,0);
		}
		public ConstDeclarationContext constDeclaration() {
			return getRuleContext(ConstDeclarationContext.class,0);
		}
		public FuncDeclarationContext funcDeclaration() {
			return getRuleContext(FuncDeclarationContext.class,0);
		}
		public ImportStatementContext importStatement() {
			return getRuleContext(ImportStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(46);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				expose();
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				constDeclaration();
				}
				break;
			case T__19:
				enterOuterAlt(_localctx, 3);
				{
				setState(44);
				funcDeclaration();
				}
				break;
			case T__28:
				enterOuterAlt(_localctx, 4);
				{
				setState(45);
				importStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public List<ExposeContext> expose() {
			return getRuleContexts(ExposeContext.class);
		}
		public ExposeContext expose(int i) {
			return getRuleContext(ExposeContext.class,i);
		}
		public List<ConstDeclarationContext> constDeclaration() {
			return getRuleContexts(ConstDeclarationContext.class);
		}
		public ConstDeclarationContext constDeclaration(int i) {
			return getRuleContext(ConstDeclarationContext.class,i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(51);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__14:
					{
					setState(48);
					expose();
					}
					break;
				case T__16:
					{
					setState(49);
					constDeclaration();
					}
					break;
				case T__11:
				case T__24:
				case T__26:
				case NUMBER:
				case STRING:
				case BOOLEAN:
				case IDENTIFIER:
					{
					setState(50);
					expression(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(53); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__14) | (1L << T__16) | (1L << T__24) | (1L << T__26) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BinaryExpressionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public BinaryExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RecordExprContext extends ExpressionContext {
		public RecordContext atom;
		public RecordContext record() {
			return getRuleContext(RecordContext.class,0);
		}
		public RecordExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FuncExprContext extends ExpressionContext {
		public FuncCallContext func;
		public FuncCallContext funcCall() {
			return getRuleContext(FuncCallContext.class,0);
		}
		public FuncExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LambdaExprContext extends ExpressionContext {
		public LambdaContext lambdaD;
		public LambdaCallContext lambdaC;
		public LambdaContext lambda() {
			return getRuleContext(LambdaContext.class,0);
		}
		public LambdaCallContext lambdaCall() {
			return getRuleContext(LambdaCallContext.class,0);
		}
		public LambdaExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberExprContext extends ExpressionContext {
		public MemberExpressionContext member;
		public MemberExpressionContext memberExpression() {
			return getRuleContext(MemberExpressionContext.class,0);
		}
		public MemberExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicExpressionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LogicExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AtomExprContext extends ExpressionContext {
		public Token atom;
		public TerminalNode NUMBER() { return getToken(RedshiftParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(RedshiftParser.BOOLEAN, 0); }
		public TerminalNode IDENTIFIER() { return getToken(RedshiftParser.IDENTIFIER, 0); }
		public TerminalNode STRING() { return getToken(RedshiftParser.STRING, 0); }
		public AtomExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ListExprContext extends ExpressionContext {
		public ListContext atom;
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public ListExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 6;
		enterRecursionRule(_localctx, 6, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				_localctx = new FuncExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(56);
				((FuncExprContext)_localctx).func = funcCall();
				}
				break;
			case 2:
				{
				_localctx = new LambdaExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(57);
				((LambdaExprContext)_localctx).lambdaD = lambda();
				}
				break;
			case 3:
				{
				_localctx = new LambdaExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(58);
				((LambdaExprContext)_localctx).lambdaC = lambdaCall();
				}
				break;
			case 4:
				{
				_localctx = new MemberExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(59);
				((MemberExprContext)_localctx).member = memberExpression(0);
				}
				break;
			case 5:
				{
				_localctx = new ListExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(60);
				((ListExprContext)_localctx).atom = list();
				}
				break;
			case 6:
				{
				_localctx = new RecordExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(61);
				((RecordExprContext)_localctx).atom = record();
				}
				break;
			case 7:
				{
				_localctx = new AtomExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(62);
				((AtomExprContext)_localctx).atom = match(NUMBER);
				}
				break;
			case 8:
				{
				_localctx = new AtomExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(63);
				((AtomExprContext)_localctx).atom = match(BOOLEAN);
				}
				break;
			case 9:
				{
				_localctx = new AtomExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(64);
				((AtomExprContext)_localctx).atom = match(IDENTIFIER);
				}
				break;
			case 10:
				{
				_localctx = new AtomExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(65);
				((AtomExprContext)_localctx).atom = match(STRING);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(82);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(80);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new LogicExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((LogicExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(68);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(69);
						((LogicExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4))) != 0)) ) {
							((LogicExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(70);
						((LogicExpressionContext)_localctx).right = expression(15);
						}
						break;
					case 2:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((BinaryExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(71);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(72);
						((BinaryExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__5 || _la==T__6) ) {
							((BinaryExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(73);
						((BinaryExpressionContext)_localctx).right = expression(14);
						}
						break;
					case 3:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((BinaryExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(74);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(75);
						((BinaryExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__7 || _la==T__8) ) {
							((BinaryExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(76);
						((BinaryExpressionContext)_localctx).right = expression(13);
						}
						break;
					case 4:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((BinaryExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(77);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(78);
						((BinaryExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__9 || _la==T__10) ) {
							((BinaryExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(79);
						((BinaryExpressionContext)_localctx).right = expression(12);
						}
						break;
					}
					} 
				}
				setState(84);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AliasedContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(RedshiftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(RedshiftParser.IDENTIFIER, i);
		}
		public AliasedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aliased; }
	}

	public final AliasedContext aliased() throws RecognitionException {
		AliasedContext _localctx = new AliasedContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_aliased);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(T__11);
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(86);
				match(IDENTIFIER);
				setState(88);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__12) {
					{
					setState(87);
					match(T__12);
					}
				}

				}
				}
				setState(94);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(95);
			match(T__13);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExposeContext extends ParserRuleContext {
		public Token module;
		public AliasedContext aliased() {
			return getRuleContext(AliasedContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(RedshiftParser.IDENTIFIER, 0); }
		public ExposeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expose; }
	}

	public final ExposeContext expose() throws RecognitionException {
		ExposeContext _localctx = new ExposeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_expose);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(T__14);
			setState(98);
			aliased();
			setState(99);
			match(T__15);
			setState(100);
			((ExposeContext)_localctx).module = match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstDeclarationContext extends ParserRuleContext {
		public Token name;
		public Token type;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<TerminalNode> IDENTIFIER() { return getTokens(RedshiftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(RedshiftParser.IDENTIFIER, i);
		}
		public ConstDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constDeclaration; }
	}

	public final ConstDeclarationContext constDeclaration() throws RecognitionException {
		ConstDeclarationContext _localctx = new ConstDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_constDeclaration);
		try {
			setState(112);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(102);
				match(T__16);
				setState(103);
				((ConstDeclarationContext)_localctx).name = match(IDENTIFIER);
				setState(104);
				match(T__17);
				setState(105);
				((ConstDeclarationContext)_localctx).type = match(IDENTIFIER);
				setState(106);
				match(T__18);
				setState(107);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(108);
				match(T__16);
				setState(109);
				((ConstDeclarationContext)_localctx).name = match(IDENTIFIER);
				setState(110);
				match(T__18);
				setState(111);
				expression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncDeclarationContext extends ParserRuleContext {
		public Token name;
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(RedshiftParser.IDENTIFIER, 0); }
		public FuncParamsContext funcParams() {
			return getRuleContext(FuncParamsContext.class,0);
		}
		public FuncDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcDeclaration; }
	}

	public final FuncDeclarationContext funcDeclaration() throws RecognitionException {
		FuncDeclarationContext _localctx = new FuncDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_funcDeclaration);
		int _la;
		try {
			setState(131);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(114);
				match(T__19);
				setState(115);
				((FuncDeclarationContext)_localctx).name = match(IDENTIFIER);
				setState(116);
				match(T__20);
				setState(117);
				block();
				setState(118);
				match(T__21);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(120);
				match(T__19);
				setState(121);
				((FuncDeclarationContext)_localctx).name = match(IDENTIFIER);
				setState(122);
				match(T__11);
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(123);
					funcParams(0);
					}
				}

				setState(126);
				match(T__13);
				setState(127);
				match(T__20);
				setState(128);
				block();
				setState(129);
				match(T__21);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FuncParamsContext funcParams() {
			return getRuleContext(FuncParamsContext.class,0);
		}
		public LambdaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambda; }
	}

	public final LambdaContext lambda() throws RecognitionException {
		LambdaContext _localctx = new LambdaContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_lambda);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(T__11);
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(134);
				funcParams(0);
				}
			}

			setState(137);
			match(T__13);
			setState(138);
			match(T__22);
			setState(139);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaCallContext extends ParserRuleContext {
		public Token name;
		public TerminalNode IDENTIFIER() { return getToken(RedshiftParser.IDENTIFIER, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LambdaCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaCall; }
	}

	public final LambdaCallContext lambdaCall() throws RecognitionException {
		LambdaCallContext _localctx = new LambdaCallContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_lambdaCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			((LambdaCallContext)_localctx).name = match(IDENTIFIER);
			setState(142);
			match(T__23);
			setState(143);
			match(T__11);
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__24) | (1L << T__26) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(144);
				expression(0);
				setState(146);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__12) {
					{
					setState(145);
					match(T__12);
					}
				}

				}
				}
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(153);
			match(T__13);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncCallContext extends ParserRuleContext {
		public Token name;
		public MemberExpressionContext member;
		public TerminalNode IDENTIFIER() { return getToken(RedshiftParser.IDENTIFIER, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MemberExpressionContext memberExpression() {
			return getRuleContext(MemberExpressionContext.class,0);
		}
		public FuncCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcCall; }
	}

	public final FuncCallContext funcCall() throws RecognitionException {
		FuncCallContext _localctx = new FuncCallContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_funcCall);
		int _la;
		try {
			setState(180);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(155);
				((FuncCallContext)_localctx).name = match(IDENTIFIER);
				setState(156);
				match(T__11);
				setState(163);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__24) | (1L << T__26) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
					{
					{
					setState(157);
					expression(0);
					setState(159);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__12) {
						{
						setState(158);
						match(T__12);
						}
					}

					}
					}
					setState(165);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(166);
				match(T__13);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(167);
				((FuncCallContext)_localctx).member = memberExpression(0);
				setState(168);
				match(T__11);
				setState(175);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__24) | (1L << T__26) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
					{
					{
					setState(169);
					expression(0);
					setState(171);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__12) {
						{
						setState(170);
						match(T__12);
						}
					}

					}
					}
					setState(177);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(178);
				match(T__13);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncParamsContext extends ParserRuleContext {
		public Token id;
		public TerminalNode IDENTIFIER() { return getToken(RedshiftParser.IDENTIFIER, 0); }
		public FuncParamsContext funcParams() {
			return getRuleContext(FuncParamsContext.class,0);
		}
		public FuncParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcParams; }
	}

	public final FuncParamsContext funcParams() throws RecognitionException {
		return funcParams(0);
	}

	private FuncParamsContext funcParams(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		FuncParamsContext _localctx = new FuncParamsContext(_ctx, _parentState);
		FuncParamsContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_funcParams, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(183);
			((FuncParamsContext)_localctx).id = match(IDENTIFIER);
			}
			_ctx.stop = _input.LT(-1);
			setState(190);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new FuncParamsContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_funcParams);
					setState(185);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(186);
					match(T__12);
					setState(187);
					((FuncParamsContext)_localctx).id = match(IDENTIFIER);
					}
					} 
				}
				setState(192);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class MemberExpressionContext extends ParserRuleContext {
		public MemberExpressionContext member;
		public Token object;
		public Token property;
		public List<TerminalNode> IDENTIFIER() { return getTokens(RedshiftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(RedshiftParser.IDENTIFIER, i);
		}
		public MemberExpressionContext memberExpression() {
			return getRuleContext(MemberExpressionContext.class,0);
		}
		public MemberExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberExpression; }
	}

	public final MemberExpressionContext memberExpression() throws RecognitionException {
		return memberExpression(0);
	}

	private MemberExpressionContext memberExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		MemberExpressionContext _localctx = new MemberExpressionContext(_ctx, _parentState);
		MemberExpressionContext _prevctx = _localctx;
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_memberExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(194);
			((MemberExpressionContext)_localctx).object = match(IDENTIFIER);
			setState(195);
			match(T__23);
			setState(196);
			((MemberExpressionContext)_localctx).property = match(IDENTIFIER);
			}
			_ctx.stop = _input.LT(-1);
			setState(203);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new MemberExpressionContext(_parentctx, _parentState);
					_localctx.member = _prevctx;
					_localctx.member = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_memberExpression);
					setState(198);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(199);
					match(T__23);
					setState(200);
					((MemberExpressionContext)_localctx).property = match(IDENTIFIER);
					}
					} 
				}
				setState(205);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(T__24);
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__24) | (1L << T__26) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(207);
				expression(0);
				setState(209);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__12) {
					{
					setState(208);
					match(T__12);
					}
				}

				}
				}
				setState(215);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(216);
			match(T__25);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RecordContext extends ParserRuleContext {
		public List<KeyValueContext> keyValue() {
			return getRuleContexts(KeyValueContext.class);
		}
		public KeyValueContext keyValue(int i) {
			return getRuleContext(KeyValueContext.class,i);
		}
		public RecordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_record; }
	}

	public final RecordContext record() throws RecognitionException {
		RecordContext _localctx = new RecordContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_record);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			match(T__26);
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(219);
				keyValue();
				setState(221);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__12) {
					{
					setState(220);
					match(T__12);
					}
				}

				}
				}
				setState(227);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(228);
			match(T__27);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyValueContext extends ParserRuleContext {
		public Token key;
		public ExpressionContext value;
		public TerminalNode IDENTIFIER() { return getToken(RedshiftParser.IDENTIFIER, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public KeyValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyValue; }
	}

	public final KeyValueContext keyValue() throws RecognitionException {
		KeyValueContext _localctx = new KeyValueContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_keyValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			((KeyValueContext)_localctx).key = match(IDENTIFIER);
			setState(231);
			match(T__18);
			setState(232);
			((KeyValueContext)_localctx).value = expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportStatementContext extends ParserRuleContext {
		public Token core;
		public Token name;
		public Token source;
		public List<TerminalNode> IDENTIFIER() { return getTokens(RedshiftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(RedshiftParser.IDENTIFIER, i);
		}
		public TerminalNode STRING() { return getToken(RedshiftParser.STRING, 0); }
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_importStatement);
		try {
			setState(244);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(234);
				match(T__28);
				setState(235);
				((ImportStatementContext)_localctx).core = match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(236);
				match(T__28);
				setState(237);
				((ImportStatementContext)_localctx).core = match(IDENTIFIER);
				setState(238);
				match(T__29);
				setState(239);
				((ImportStatementContext)_localctx).name = match(IDENTIFIER);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(240);
				match(T__28);
				setState(241);
				((ImportStatementContext)_localctx).source = match(STRING);
				setState(242);
				match(T__29);
				setState(243);
				((ImportStatementContext)_localctx).name = match(IDENTIFIER);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 3:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		case 11:
			return funcParams_sempred((FuncParamsContext)_localctx, predIndex);
		case 12:
			return memberExpression_sempred((MemberExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 14);
		case 1:
			return precpred(_ctx, 13);
		case 2:
			return precpred(_ctx, 12);
		case 3:
			return precpred(_ctx, 11);
		}
		return true;
	}
	private boolean funcParams_sempred(FuncParamsContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean memberExpression_sempred(MemberExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3&\u00f9\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\7\2&\n\2\f\2\16\2)\13\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3\61\n\3\3\4\3"+
		"\4\3\4\6\4\66\n\4\r\4\16\4\67\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\5\5E\n\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\7\5S\n\5"+
		"\f\5\16\5V\13\5\3\6\3\6\3\6\5\6[\n\6\7\6]\n\6\f\6\16\6`\13\6\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\bs\n\b\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\177\n\t\3\t\3\t\3\t\3\t\3\t"+
		"\5\t\u0086\n\t\3\n\3\n\5\n\u008a\n\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3"+
		"\13\3\13\5\13\u0095\n\13\7\13\u0097\n\13\f\13\16\13\u009a\13\13\3\13\3"+
		"\13\3\f\3\f\3\f\3\f\5\f\u00a2\n\f\7\f\u00a4\n\f\f\f\16\f\u00a7\13\f\3"+
		"\f\3\f\3\f\3\f\3\f\5\f\u00ae\n\f\7\f\u00b0\n\f\f\f\16\f\u00b3\13\f\3\f"+
		"\3\f\5\f\u00b7\n\f\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u00bf\n\r\f\r\16\r\u00c2"+
		"\13\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\7\16\u00cc\n\16\f\16\16"+
		"\16\u00cf\13\16\3\17\3\17\3\17\5\17\u00d4\n\17\7\17\u00d6\n\17\f\17\16"+
		"\17\u00d9\13\17\3\17\3\17\3\20\3\20\3\20\5\20\u00e0\n\20\7\20\u00e2\n"+
		"\20\f\20\16\20\u00e5\13\20\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u00f7\n\22\3\22\2\5\b\30\32\23"+
		"\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"\2\6\3\2\3\7\3\2\b\t\3\2\n\13"+
		"\3\2\f\r\2\u0110\2\'\3\2\2\2\4\60\3\2\2\2\6\65\3\2\2\2\bD\3\2\2\2\nW\3"+
		"\2\2\2\fc\3\2\2\2\16r\3\2\2\2\20\u0085\3\2\2\2\22\u0087\3\2\2\2\24\u008f"+
		"\3\2\2\2\26\u00b6\3\2\2\2\30\u00b8\3\2\2\2\32\u00c3\3\2\2\2\34\u00d0\3"+
		"\2\2\2\36\u00dc\3\2\2\2 \u00e8\3\2\2\2\"\u00f6\3\2\2\2$&\5\4\3\2%$\3\2"+
		"\2\2&)\3\2\2\2\'%\3\2\2\2\'(\3\2\2\2(*\3\2\2\2)\'\3\2\2\2*+\7\2\2\3+\3"+
		"\3\2\2\2,\61\5\f\7\2-\61\5\16\b\2.\61\5\20\t\2/\61\5\"\22\2\60,\3\2\2"+
		"\2\60-\3\2\2\2\60.\3\2\2\2\60/\3\2\2\2\61\5\3\2\2\2\62\66\5\f\7\2\63\66"+
		"\5\16\b\2\64\66\5\b\5\2\65\62\3\2\2\2\65\63\3\2\2\2\65\64\3\2\2\2\66\67"+
		"\3\2\2\2\67\65\3\2\2\2\678\3\2\2\28\7\3\2\2\29:\b\5\1\2:E\5\26\f\2;E\5"+
		"\22\n\2<E\5\24\13\2=E\5\32\16\2>E\5\34\17\2?E\5\36\20\2@E\7!\2\2AE\7#"+
		"\2\2BE\7$\2\2CE\7\"\2\2D9\3\2\2\2D;\3\2\2\2D<\3\2\2\2D=\3\2\2\2D>\3\2"+
		"\2\2D?\3\2\2\2D@\3\2\2\2DA\3\2\2\2DB\3\2\2\2DC\3\2\2\2ET\3\2\2\2FG\f\20"+
		"\2\2GH\t\2\2\2HS\5\b\5\21IJ\f\17\2\2JK\t\3\2\2KS\5\b\5\20LM\f\16\2\2M"+
		"N\t\4\2\2NS\5\b\5\17OP\f\r\2\2PQ\t\5\2\2QS\5\b\5\16RF\3\2\2\2RI\3\2\2"+
		"\2RL\3\2\2\2RO\3\2\2\2SV\3\2\2\2TR\3\2\2\2TU\3\2\2\2U\t\3\2\2\2VT\3\2"+
		"\2\2W^\7\16\2\2XZ\7$\2\2Y[\7\17\2\2ZY\3\2\2\2Z[\3\2\2\2[]\3\2\2\2\\X\3"+
		"\2\2\2]`\3\2\2\2^\\\3\2\2\2^_\3\2\2\2_a\3\2\2\2`^\3\2\2\2ab\7\20\2\2b"+
		"\13\3\2\2\2cd\7\21\2\2de\5\n\6\2ef\7\22\2\2fg\7$\2\2g\r\3\2\2\2hi\7\23"+
		"\2\2ij\7$\2\2jk\7\24\2\2kl\7$\2\2lm\7\25\2\2ms\5\b\5\2no\7\23\2\2op\7"+
		"$\2\2pq\7\25\2\2qs\5\b\5\2rh\3\2\2\2rn\3\2\2\2s\17\3\2\2\2tu\7\26\2\2"+
		"uv\7$\2\2vw\7\27\2\2wx\5\6\4\2xy\7\30\2\2y\u0086\3\2\2\2z{\7\26\2\2{|"+
		"\7$\2\2|~\7\16\2\2}\177\5\30\r\2~}\3\2\2\2~\177\3\2\2\2\177\u0080\3\2"+
		"\2\2\u0080\u0081\7\20\2\2\u0081\u0082\7\27\2\2\u0082\u0083\5\6\4\2\u0083"+
		"\u0084\7\30\2\2\u0084\u0086\3\2\2\2\u0085t\3\2\2\2\u0085z\3\2\2\2\u0086"+
		"\21\3\2\2\2\u0087\u0089\7\16\2\2\u0088\u008a\5\30\r\2\u0089\u0088\3\2"+
		"\2\2\u0089\u008a\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u008c\7\20\2\2\u008c"+
		"\u008d\7\31\2\2\u008d\u008e\5\b\5\2\u008e\23\3\2\2\2\u008f\u0090\7$\2"+
		"\2\u0090\u0091\7\32\2\2\u0091\u0098\7\16\2\2\u0092\u0094\5\b\5\2\u0093"+
		"\u0095\7\17\2\2\u0094\u0093\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0097\3"+
		"\2\2\2\u0096\u0092\3\2\2\2\u0097\u009a\3\2\2\2\u0098\u0096\3\2\2\2\u0098"+
		"\u0099\3\2\2\2\u0099\u009b\3\2\2\2\u009a\u0098\3\2\2\2\u009b\u009c\7\20"+
		"\2\2\u009c\25\3\2\2\2\u009d\u009e\7$\2\2\u009e\u00a5\7\16\2\2\u009f\u00a1"+
		"\5\b\5\2\u00a0\u00a2\7\17\2\2\u00a1\u00a0\3\2\2\2\u00a1\u00a2\3\2\2\2"+
		"\u00a2\u00a4\3\2\2\2\u00a3\u009f\3\2\2\2\u00a4\u00a7\3\2\2\2\u00a5\u00a3"+
		"\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00a8\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a8"+
		"\u00b7\7\20\2\2\u00a9\u00aa\5\32\16\2\u00aa\u00b1\7\16\2\2\u00ab\u00ad"+
		"\5\b\5\2\u00ac\u00ae\7\17\2\2\u00ad\u00ac\3\2\2\2\u00ad\u00ae\3\2\2\2"+
		"\u00ae\u00b0\3\2\2\2\u00af\u00ab\3\2\2\2\u00b0\u00b3\3\2\2\2\u00b1\u00af"+
		"\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b4\3\2\2\2\u00b3\u00b1\3\2\2\2\u00b4"+
		"\u00b5\7\20\2\2\u00b5\u00b7\3\2\2\2\u00b6\u009d\3\2\2\2\u00b6\u00a9\3"+
		"\2\2\2\u00b7\27\3\2\2\2\u00b8\u00b9\b\r\1\2\u00b9\u00ba\7$\2\2\u00ba\u00c0"+
		"\3\2\2\2\u00bb\u00bc\f\3\2\2\u00bc\u00bd\7\17\2\2\u00bd\u00bf\7$\2\2\u00be"+
		"\u00bb\3\2\2\2\u00bf\u00c2\3\2\2\2\u00c0\u00be\3\2\2\2\u00c0\u00c1\3\2"+
		"\2\2\u00c1\31\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c3\u00c4\b\16\1\2\u00c4\u00c5"+
		"\7$\2\2\u00c5\u00c6\7\32\2\2\u00c6\u00c7\7$\2\2\u00c7\u00cd\3\2\2\2\u00c8"+
		"\u00c9\f\3\2\2\u00c9\u00ca\7\32\2\2\u00ca\u00cc\7$\2\2\u00cb\u00c8\3\2"+
		"\2\2\u00cc\u00cf\3\2\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce"+
		"\33\3\2\2\2\u00cf\u00cd\3\2\2\2\u00d0\u00d7\7\33\2\2\u00d1\u00d3\5\b\5"+
		"\2\u00d2\u00d4\7\17\2\2\u00d3\u00d2\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4"+
		"\u00d6\3\2\2\2\u00d5\u00d1\3\2\2\2\u00d6\u00d9\3\2\2\2\u00d7\u00d5\3\2"+
		"\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00da\3\2\2\2\u00d9\u00d7\3\2\2\2\u00da"+
		"\u00db\7\34\2\2\u00db\35\3\2\2\2\u00dc\u00e3\7\35\2\2\u00dd\u00df\5 \21"+
		"\2\u00de\u00e0\7\17\2\2\u00df\u00de\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0"+
		"\u00e2\3\2\2\2\u00e1\u00dd\3\2\2\2\u00e2\u00e5\3\2\2\2\u00e3\u00e1\3\2"+
		"\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e6\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e6"+
		"\u00e7\7\36\2\2\u00e7\37\3\2\2\2\u00e8\u00e9\7$\2\2\u00e9\u00ea\7\25\2"+
		"\2\u00ea\u00eb\5\b\5\2\u00eb!\3\2\2\2\u00ec\u00ed\7\37\2\2\u00ed\u00f7"+
		"\7$\2\2\u00ee\u00ef\7\37\2\2\u00ef\u00f0\7$\2\2\u00f0\u00f1\7 \2\2\u00f1"+
		"\u00f7\7$\2\2\u00f2\u00f3\7\37\2\2\u00f3\u00f4\7\"\2\2\u00f4\u00f5\7 "+
		"\2\2\u00f5\u00f7\7$\2\2\u00f6\u00ec\3\2\2\2\u00f6\u00ee\3\2\2\2\u00f6"+
		"\u00f2\3\2\2\2\u00f7#\3\2\2\2\35\'\60\65\67DRTZ^r~\u0085\u0089\u0094\u0098"+
		"\u00a1\u00a5\u00ad\u00b1\u00b6\u00c0\u00cd\u00d3\u00d7\u00df\u00e3\u00f6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}