grammar Redshift;

program: statement* EOF;

statement:
	expression
	| constDeclaration
	| funcDeclaration
	| importStatement;

block: (constDeclaration | expression)+;

expression:
	left = expression op = ('===' | '>' | '<' | '<=' | '>=') right = expression	# logicExpression
	| left = expression op = ('*' | '/') right = expression						# binaryExpression
	| left = expression op = ('+' | '-') right = expression						# binaryExpression
	| left = expression op = ('<>' | '++') right = expression					# binaryExpression
	| func = funcCall															# funcExpr
	| lambdaD = lambda															# lambdaExpr
	| lambdaC = lambdaCall														# lambdaExpr
	| member = memberExpression													# memberExpr
	| atom = list																# listExpr
	| atom = record																# recordExpr
	| atom = NUMBER																# atomExpr
	| atom = BOOLEAN															# atomExpr
	| atom = IDENTIFIER															# atomExpr
	| atom = STRING																# atomExpr;

constDeclaration:
	'let' name = IDENTIFIER ':' type = IDENTIFIER '=' expression
	| 'let' name = IDENTIFIER '=' expression;

funcDeclaration:
	'def' name = IDENTIFIER 'do' block 'end'
	| 'def' name = IDENTIFIER '(' funcParams? ')' 'do' block 'end';

lambda: '(' funcParams? ')' '->' expression;

lambdaCall: name = IDENTIFIER '.' '(' (expression ','?)* ')';

funcCall:
	name = IDENTIFIER '(' (expression ','?)* ')'
	| member = memberExpression '(' (expression ','?)* ')';

funcParams: id = IDENTIFIER | funcParams ',' id = IDENTIFIER;

memberExpression:
	object = IDENTIFIER '.' property = IDENTIFIER
	| member = memberExpression '.' property = IDENTIFIER;

list: '[' (expression ','?)* ']';
record: '{' (keyValue ','?)* '}';

keyValue: key = IDENTIFIER '=' value = expression;

importStatement:
	'import' core = IDENTIFIER
	| 'import' core = IDENTIFIER 'as' name = IDENTIFIER
	| 'import' source = STRING 'as' name = IDENTIFIER;

NUMBER: ('0' .. '9')+ ('.' ('0' .. '9')+)?;

STRING: '"' ~('"')* '"';

BOOLEAN: ('true' | 'false');

IDENTIFIER: [a-zA-Z_!?]+;

WS: [ \n\t\r]+ -> skip;

NEWLINE: ('\r'? '\n' | '\r')+;
