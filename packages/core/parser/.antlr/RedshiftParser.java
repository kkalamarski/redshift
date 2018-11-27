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
		T__24=25, T__25=26, T__26=27, T__27=28, NUMBER=29, STRING=30, BOOLEAN=31, 
		IDENTIFIER=32, WS=33, NEWLINE=34;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_block = 2, RULE_expression = 3, 
		RULE_constDeclaration = 4, RULE_funcDeclaration = 5, RULE_lambda = 6, 
		RULE_lambdaCall = 7, RULE_funcCall = 8, RULE_funcParams = 9, RULE_memberExpression = 10, 
		RULE_list = 11, RULE_record = 12, RULE_keyValue = 13, RULE_importStatement = 14;
	public static final String[] ruleNames = {
		"program", "statement", "block", "expression", "constDeclaration", "funcDeclaration", 
		"lambda", "lambdaCall", "funcCall", "funcParams", "memberExpression", 
		"list", "record", "keyValue", "importStatement"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'==='", "'>'", "'<'", "'<='", "'>='", "'*'", "'/'", "'+'", "'-'", 
		"'<>'", "'++'", "'let'", "':'", "'='", "'def'", "'do'", "'end'", "'('", 
		"')'", "'->'", "'.'", "','", "'['", "']'", "'{'", "'}'", "'import'", "'as'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, "NUMBER", "STRING", "BOOLEAN", "IDENTIFIER", 
		"WS", "NEWLINE"
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
			setState(33);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__14) | (1L << T__17) | (1L << T__22) | (1L << T__24) | (1L << T__26) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(30);
				statement();
				}
				}
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(36);
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
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
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
			setState(42);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__17:
			case T__22:
			case T__24:
			case NUMBER:
			case STRING:
			case BOOLEAN:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				expression(0);
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				constDeclaration();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 3);
				{
				setState(40);
				funcDeclaration();
				}
				break;
			case T__26:
				enterOuterAlt(_localctx, 4);
				{
				setState(41);
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
			setState(46); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(46);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__11:
					{
					setState(44);
					constDeclaration();
					}
					break;
				case T__17:
				case T__22:
				case T__24:
				case NUMBER:
				case STRING:
				case BOOLEAN:
				case IDENTIFIER:
					{
					setState(45);
					expression(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(48); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__17) | (1L << T__22) | (1L << T__24) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0) );
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
			setState(61);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				_localctx = new FuncExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(51);
				((FuncExprContext)_localctx).func = funcCall();
				}
				break;
			case 2:
				{
				_localctx = new LambdaExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(52);
				((LambdaExprContext)_localctx).lambdaD = lambda();
				}
				break;
			case 3:
				{
				_localctx = new LambdaExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(53);
				((LambdaExprContext)_localctx).lambdaC = lambdaCall();
				}
				break;
			case 4:
				{
				_localctx = new MemberExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(54);
				((MemberExprContext)_localctx).member = memberExpression(0);
				}
				break;
			case 5:
				{
				_localctx = new ListExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(55);
				((ListExprContext)_localctx).atom = list();
				}
				break;
			case 6:
				{
				_localctx = new RecordExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(56);
				((RecordExprContext)_localctx).atom = record();
				}
				break;
			case 7:
				{
				_localctx = new AtomExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(57);
				((AtomExprContext)_localctx).atom = match(NUMBER);
				}
				break;
			case 8:
				{
				_localctx = new AtomExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(58);
				((AtomExprContext)_localctx).atom = match(BOOLEAN);
				}
				break;
			case 9:
				{
				_localctx = new AtomExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(59);
				((AtomExprContext)_localctx).atom = match(IDENTIFIER);
				}
				break;
			case 10:
				{
				_localctx = new AtomExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(60);
				((AtomExprContext)_localctx).atom = match(STRING);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(77);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(75);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new LogicExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((LogicExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(63);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(64);
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
						setState(65);
						((LogicExpressionContext)_localctx).right = expression(15);
						}
						break;
					case 2:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((BinaryExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(66);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(67);
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
						setState(68);
						((BinaryExpressionContext)_localctx).right = expression(14);
						}
						break;
					case 3:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((BinaryExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(69);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(70);
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
						setState(71);
						((BinaryExpressionContext)_localctx).right = expression(13);
						}
						break;
					case 4:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((BinaryExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(72);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(73);
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
						setState(74);
						((BinaryExpressionContext)_localctx).right = expression(12);
						}
						break;
					}
					} 
				}
				setState(79);
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
		enterRule(_localctx, 8, RULE_constDeclaration);
		try {
			setState(90);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				match(T__11);
				setState(81);
				((ConstDeclarationContext)_localctx).name = match(IDENTIFIER);
				setState(82);
				match(T__12);
				setState(83);
				((ConstDeclarationContext)_localctx).type = match(IDENTIFIER);
				setState(84);
				match(T__13);
				setState(85);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(86);
				match(T__11);
				setState(87);
				((ConstDeclarationContext)_localctx).name = match(IDENTIFIER);
				setState(88);
				match(T__13);
				setState(89);
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
		enterRule(_localctx, 10, RULE_funcDeclaration);
		int _la;
		try {
			setState(109);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(92);
				match(T__14);
				setState(93);
				((FuncDeclarationContext)_localctx).name = match(IDENTIFIER);
				setState(94);
				match(T__15);
				setState(95);
				block();
				setState(96);
				match(T__16);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(98);
				match(T__14);
				setState(99);
				((FuncDeclarationContext)_localctx).name = match(IDENTIFIER);
				setState(100);
				match(T__17);
				setState(102);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(101);
					funcParams(0);
					}
				}

				setState(104);
				match(T__18);
				setState(105);
				match(T__15);
				setState(106);
				block();
				setState(107);
				match(T__16);
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
		enterRule(_localctx, 12, RULE_lambda);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(T__17);
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(112);
				funcParams(0);
				}
			}

			setState(115);
			match(T__18);
			setState(116);
			match(T__19);
			setState(117);
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
		enterRule(_localctx, 14, RULE_lambdaCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			((LambdaCallContext)_localctx).name = match(IDENTIFIER);
			setState(120);
			match(T__20);
			setState(121);
			match(T__17);
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__17) | (1L << T__22) | (1L << T__24) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(122);
				expression(0);
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__21) {
					{
					setState(123);
					match(T__21);
					}
				}

				}
				}
				setState(130);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(131);
			match(T__18);
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
		enterRule(_localctx, 16, RULE_funcCall);
		int _la;
		try {
			setState(158);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(133);
				((FuncCallContext)_localctx).name = match(IDENTIFIER);
				setState(134);
				match(T__17);
				setState(141);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__17) | (1L << T__22) | (1L << T__24) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
					{
					{
					setState(135);
					expression(0);
					setState(137);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__21) {
						{
						setState(136);
						match(T__21);
						}
					}

					}
					}
					setState(143);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(144);
				match(T__18);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(145);
				((FuncCallContext)_localctx).member = memberExpression(0);
				setState(146);
				match(T__17);
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__17) | (1L << T__22) | (1L << T__24) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
					{
					{
					setState(147);
					expression(0);
					setState(149);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__21) {
						{
						setState(148);
						match(T__21);
						}
					}

					}
					}
					setState(155);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(156);
				match(T__18);
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
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_funcParams, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(161);
			((FuncParamsContext)_localctx).id = match(IDENTIFIER);
			}
			_ctx.stop = _input.LT(-1);
			setState(168);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new FuncParamsContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_funcParams);
					setState(163);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(164);
					match(T__21);
					setState(165);
					((FuncParamsContext)_localctx).id = match(IDENTIFIER);
					}
					} 
				}
				setState(170);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
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
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_memberExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(172);
			((MemberExpressionContext)_localctx).object = match(IDENTIFIER);
			setState(173);
			match(T__20);
			setState(174);
			((MemberExpressionContext)_localctx).property = match(IDENTIFIER);
			}
			_ctx.stop = _input.LT(-1);
			setState(181);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
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
					setState(176);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(177);
					match(T__20);
					setState(178);
					((MemberExpressionContext)_localctx).property = match(IDENTIFIER);
					}
					} 
				}
				setState(183);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
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
		enterRule(_localctx, 22, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(T__22);
			setState(191);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__17) | (1L << T__22) | (1L << T__24) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(185);
				expression(0);
				setState(187);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__21) {
					{
					setState(186);
					match(T__21);
					}
				}

				}
				}
				setState(193);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(194);
			match(T__23);
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
		enterRule(_localctx, 24, RULE_record);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			match(T__24);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(197);
				keyValue();
				setState(199);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__21) {
					{
					setState(198);
					match(T__21);
					}
				}

				}
				}
				setState(205);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(206);
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
		enterRule(_localctx, 26, RULE_keyValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			((KeyValueContext)_localctx).key = match(IDENTIFIER);
			setState(209);
			match(T__13);
			setState(210);
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
		enterRule(_localctx, 28, RULE_importStatement);
		try {
			setState(222);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(212);
				match(T__26);
				setState(213);
				((ImportStatementContext)_localctx).core = match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(214);
				match(T__26);
				setState(215);
				((ImportStatementContext)_localctx).core = match(IDENTIFIER);
				setState(216);
				match(T__27);
				setState(217);
				((ImportStatementContext)_localctx).name = match(IDENTIFIER);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(218);
				match(T__26);
				setState(219);
				((ImportStatementContext)_localctx).source = match(STRING);
				setState(220);
				match(T__27);
				setState(221);
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
		case 9:
			return funcParams_sempred((FuncParamsContext)_localctx, predIndex);
		case 10:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3$\u00e3\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\7\2\"\n\2\f\2\16"+
		"\2%\13\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3-\n\3\3\4\3\4\6\4\61\n\4\r\4\16\4"+
		"\62\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5@\n\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\7\5N\n\5\f\5\16\5Q\13\5\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6]\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\5\7i\n\7\3\7\3\7\3\7\3\7\3\7\5\7p\n\7\3\b\3\b\5\bt\n\b\3\b\3"+
		"\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\5\t\177\n\t\7\t\u0081\n\t\f\t\16\t\u0084"+
		"\13\t\3\t\3\t\3\n\3\n\3\n\3\n\5\n\u008c\n\n\7\n\u008e\n\n\f\n\16\n\u0091"+
		"\13\n\3\n\3\n\3\n\3\n\3\n\5\n\u0098\n\n\7\n\u009a\n\n\f\n\16\n\u009d\13"+
		"\n\3\n\3\n\5\n\u00a1\n\n\3\13\3\13\3\13\3\13\3\13\3\13\7\13\u00a9\n\13"+
		"\f\13\16\13\u00ac\13\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\7\f\u00b6\n\f"+
		"\f\f\16\f\u00b9\13\f\3\r\3\r\3\r\5\r\u00be\n\r\7\r\u00c0\n\r\f\r\16\r"+
		"\u00c3\13\r\3\r\3\r\3\16\3\16\3\16\5\16\u00ca\n\16\7\16\u00cc\n\16\f\16"+
		"\16\16\u00cf\13\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3"+
		"\20\3\20\3\20\3\20\3\20\3\20\5\20\u00e1\n\20\3\20\2\5\b\24\26\21\2\4\6"+
		"\b\n\f\16\20\22\24\26\30\32\34\36\2\6\3\2\3\7\3\2\b\t\3\2\n\13\3\2\f\r"+
		"\2\u00f9\2#\3\2\2\2\4,\3\2\2\2\6\60\3\2\2\2\b?\3\2\2\2\n\\\3\2\2\2\fo"+
		"\3\2\2\2\16q\3\2\2\2\20y\3\2\2\2\22\u00a0\3\2\2\2\24\u00a2\3\2\2\2\26"+
		"\u00ad\3\2\2\2\30\u00ba\3\2\2\2\32\u00c6\3\2\2\2\34\u00d2\3\2\2\2\36\u00e0"+
		"\3\2\2\2 \"\5\4\3\2! \3\2\2\2\"%\3\2\2\2#!\3\2\2\2#$\3\2\2\2$&\3\2\2\2"+
		"%#\3\2\2\2&\'\7\2\2\3\'\3\3\2\2\2(-\5\b\5\2)-\5\n\6\2*-\5\f\7\2+-\5\36"+
		"\20\2,(\3\2\2\2,)\3\2\2\2,*\3\2\2\2,+\3\2\2\2-\5\3\2\2\2.\61\5\n\6\2/"+
		"\61\5\b\5\2\60.\3\2\2\2\60/\3\2\2\2\61\62\3\2\2\2\62\60\3\2\2\2\62\63"+
		"\3\2\2\2\63\7\3\2\2\2\64\65\b\5\1\2\65@\5\22\n\2\66@\5\16\b\2\67@\5\20"+
		"\t\28@\5\26\f\29@\5\30\r\2:@\5\32\16\2;@\7\37\2\2<@\7!\2\2=@\7\"\2\2>"+
		"@\7 \2\2?\64\3\2\2\2?\66\3\2\2\2?\67\3\2\2\2?8\3\2\2\2?9\3\2\2\2?:\3\2"+
		"\2\2?;\3\2\2\2?<\3\2\2\2?=\3\2\2\2?>\3\2\2\2@O\3\2\2\2AB\f\20\2\2BC\t"+
		"\2\2\2CN\5\b\5\21DE\f\17\2\2EF\t\3\2\2FN\5\b\5\20GH\f\16\2\2HI\t\4\2\2"+
		"IN\5\b\5\17JK\f\r\2\2KL\t\5\2\2LN\5\b\5\16MA\3\2\2\2MD\3\2\2\2MG\3\2\2"+
		"\2MJ\3\2\2\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2P\t\3\2\2\2QO\3\2\2\2RS\7\16"+
		"\2\2ST\7\"\2\2TU\7\17\2\2UV\7\"\2\2VW\7\20\2\2W]\5\b\5\2XY\7\16\2\2YZ"+
		"\7\"\2\2Z[\7\20\2\2[]\5\b\5\2\\R\3\2\2\2\\X\3\2\2\2]\13\3\2\2\2^_\7\21"+
		"\2\2_`\7\"\2\2`a\7\22\2\2ab\5\6\4\2bc\7\23\2\2cp\3\2\2\2de\7\21\2\2ef"+
		"\7\"\2\2fh\7\24\2\2gi\5\24\13\2hg\3\2\2\2hi\3\2\2\2ij\3\2\2\2jk\7\25\2"+
		"\2kl\7\22\2\2lm\5\6\4\2mn\7\23\2\2np\3\2\2\2o^\3\2\2\2od\3\2\2\2p\r\3"+
		"\2\2\2qs\7\24\2\2rt\5\24\13\2sr\3\2\2\2st\3\2\2\2tu\3\2\2\2uv\7\25\2\2"+
		"vw\7\26\2\2wx\5\b\5\2x\17\3\2\2\2yz\7\"\2\2z{\7\27\2\2{\u0082\7\24\2\2"+
		"|~\5\b\5\2}\177\7\30\2\2~}\3\2\2\2~\177\3\2\2\2\177\u0081\3\2\2\2\u0080"+
		"|\3\2\2\2\u0081\u0084\3\2\2\2\u0082\u0080\3\2\2\2\u0082\u0083\3\2\2\2"+
		"\u0083\u0085\3\2\2\2\u0084\u0082\3\2\2\2\u0085\u0086\7\25\2\2\u0086\21"+
		"\3\2\2\2\u0087\u0088\7\"\2\2\u0088\u008f\7\24\2\2\u0089\u008b\5\b\5\2"+
		"\u008a\u008c\7\30\2\2\u008b\u008a\3\2\2\2\u008b\u008c\3\2\2\2\u008c\u008e"+
		"\3\2\2\2\u008d\u0089\3\2\2\2\u008e\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f"+
		"\u0090\3\2\2\2\u0090\u0092\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u00a1\7\25"+
		"\2\2\u0093\u0094\5\26\f\2\u0094\u009b\7\24\2\2\u0095\u0097\5\b\5\2\u0096"+
		"\u0098\7\30\2\2\u0097\u0096\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u009a\3"+
		"\2\2\2\u0099\u0095\3\2\2\2\u009a\u009d\3\2\2\2\u009b\u0099\3\2\2\2\u009b"+
		"\u009c\3\2\2\2\u009c\u009e\3\2\2\2\u009d\u009b\3\2\2\2\u009e\u009f\7\25"+
		"\2\2\u009f\u00a1\3\2\2\2\u00a0\u0087\3\2\2\2\u00a0\u0093\3\2\2\2\u00a1"+
		"\23\3\2\2\2\u00a2\u00a3\b\13\1\2\u00a3\u00a4\7\"\2\2\u00a4\u00aa\3\2\2"+
		"\2\u00a5\u00a6\f\3\2\2\u00a6\u00a7\7\30\2\2\u00a7\u00a9\7\"\2\2\u00a8"+
		"\u00a5\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3\2\2\2\u00aa\u00ab\3\2"+
		"\2\2\u00ab\25\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ad\u00ae\b\f\1\2\u00ae\u00af"+
		"\7\"\2\2\u00af\u00b0\7\27\2\2\u00b0\u00b1\7\"\2\2\u00b1\u00b7\3\2\2\2"+
		"\u00b2\u00b3\f\3\2\2\u00b3\u00b4\7\27\2\2\u00b4\u00b6\7\"\2\2\u00b5\u00b2"+
		"\3\2\2\2\u00b6\u00b9\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8"+
		"\27\3\2\2\2\u00b9\u00b7\3\2\2\2\u00ba\u00c1\7\31\2\2\u00bb\u00bd\5\b\5"+
		"\2\u00bc\u00be\7\30\2\2\u00bd\u00bc\3\2\2\2\u00bd\u00be\3\2\2\2\u00be"+
		"\u00c0\3\2\2\2\u00bf\u00bb\3\2\2\2\u00c0\u00c3\3\2\2\2\u00c1\u00bf\3\2"+
		"\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c4\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c4"+
		"\u00c5\7\32\2\2\u00c5\31\3\2\2\2\u00c6\u00cd\7\33\2\2\u00c7\u00c9\5\34"+
		"\17\2\u00c8\u00ca\7\30\2\2\u00c9\u00c8\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca"+
		"\u00cc\3\2\2\2\u00cb\u00c7\3\2\2\2\u00cc\u00cf\3\2\2\2\u00cd\u00cb\3\2"+
		"\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00d0\3\2\2\2\u00cf\u00cd\3\2\2\2\u00d0"+
		"\u00d1\7\34\2\2\u00d1\33\3\2\2\2\u00d2\u00d3\7\"\2\2\u00d3\u00d4\7\20"+
		"\2\2\u00d4\u00d5\5\b\5\2\u00d5\35\3\2\2\2\u00d6\u00d7\7\35\2\2\u00d7\u00e1"+
		"\7\"\2\2\u00d8\u00d9\7\35\2\2\u00d9\u00da\7\"\2\2\u00da\u00db\7\36\2\2"+
		"\u00db\u00e1\7\"\2\2\u00dc\u00dd\7\35\2\2\u00dd\u00de\7 \2\2\u00de\u00df"+
		"\7\36\2\2\u00df\u00e1\7\"\2\2\u00e0\u00d6\3\2\2\2\u00e0\u00d8\3\2\2\2"+
		"\u00e0\u00dc\3\2\2\2\u00e1\37\3\2\2\2\33#,\60\62?MO\\hos~\u0082\u008b"+
		"\u008f\u0097\u009b\u00a0\u00aa\u00b7\u00bd\u00c1\u00c9\u00cd\u00e0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}