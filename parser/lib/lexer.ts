export enum TokenType {
  Keyword = "Keyword",
  Operator = "Operator",
  Number = "Number",
  Identifier = "Identifier",
  MemberIdentifier = "MemberIdentifier",
  Function = "Function",
  String = "String",
  BlockString = "BlockString",
  Token = "Token",
  Newline = "Newline",

  // Operators
  Plus = "Plus",
  Minus = "Minus",
  Division = "Division",
  Multiplication = "Multiplication",
  Equals = "Equals",
  StringConcat = "StringConcat",
  ListConcat = "ListConcat",
  Power = "Power",
  ThinArrow = "ThinArrow",
  FatArrow = "FatArrow",

  // Tokens
  Dot = "Dot",
  Comma = "Comma",

  ListOpen = "ListOpen",
  ListClose = "ListClose",

  ParamsOpen = "ParamsOpen",
  ParamsClose = "ParamsClose",

  TupleOpen = "TupleOpen",
  TupleClose = "TupleClose",

  MapOpen = "MapOpen",
  MapClose = "MapClose",

  // Keywords
  DefModule = "DefModule",
  Def = "Def",
  Do = "Do",
  End = "End",
  Import = "Import",
  As = "As",
  Fn = "Fn"
}

class TokenDefiniftion {
  constructor(public tokenType, public regex) {}
}

export const TokenDefinitions: TokenDefiniftion[] = [
  new TokenDefiniftion(TokenType.Number, /^\d+(\.\d+)?/),
  new TokenDefiniftion(TokenType.Newline, /^[\r?\n]+/),
  new TokenDefiniftion(TokenType.BlockString, /^"""[^']*"""/),
  new TokenDefiniftion(TokenType.String, /^"[^"]*"/),
  new TokenDefiniftion(TokenType.String, /^'[^']*'/),
  new TokenDefiniftion(TokenType.Comma, /^\,/),

  // Operators
  new TokenDefiniftion(TokenType.StringConcat, /^\<\>/),
  new TokenDefiniftion(TokenType.ListConcat, /^\+\+/),
  new TokenDefiniftion(TokenType.Power, /^\*\*/),
  new TokenDefiniftion(TokenType.ThinArrow, /^\-\>/),
  new TokenDefiniftion(TokenType.FatArrow, /^\=\>/),
  new TokenDefiniftion(TokenType.Plus, /^\+/),
  new TokenDefiniftion(TokenType.Minus, /^\-/),
  new TokenDefiniftion(TokenType.Division, /^\//),
  new TokenDefiniftion(TokenType.Multiplication, /^\*/),
  new TokenDefiniftion(TokenType.Equals, /^\=/),

  // Tokens
  new TokenDefiniftion(TokenType.ListOpen, /^\[/),
  new TokenDefiniftion(TokenType.Dot, /^\./),
  new TokenDefiniftion(TokenType.ListClose, /^\]/),
  new TokenDefiniftion(TokenType.TupleOpen, /^\{/),
  new TokenDefiniftion(TokenType.TupleClose, /^\}/),
  new TokenDefiniftion(TokenType.MapClose, /^\%\{/),
  new TokenDefiniftion(TokenType.ParamsOpen, /^\(/),
  new TokenDefiniftion(TokenType.ParamsClose, /^\)/),

  // Keywords
  new TokenDefiniftion(TokenType.DefModule, /^defmodule/),
  new TokenDefiniftion(TokenType.Def, /^def/),
  new TokenDefiniftion(TokenType.Do, /^do/),
  new TokenDefiniftion(TokenType.End, /^end/),
  new TokenDefiniftion(TokenType.Import, /^import/),
  new TokenDefiniftion(TokenType.As, /^as/),
  new TokenDefiniftion(TokenType.Fn, /^fn/),
  new TokenDefiniftion(
    TokenType.MemberIdentifier,
    /^[$A-Z_][0-9A-Z_$]*\.[$A-Z_][0-9A-Z_$]+/i
  ),
  new TokenDefiniftion(TokenType.Identifier, /^[$A-Z_][0-9A-Z_$]*/i)
]

export type Token = [TokenType, string?, string?]

export const isKeyword = (token: Token): boolean => {
  const [type, _value, _position] = token

  return (
    type === TokenType.DefModule ||
    type === TokenType.Def ||
    type === TokenType.Do ||
    type === TokenType.End ||
    type === TokenType.Import ||
    type === TokenType.As ||
    type === TokenType.Fn
  )
}

export const isValidParameter = (token: Token): boolean => {
  const [type, _value, _position] = token

  return (
    type === TokenType.Identifier ||
    type === TokenType.Number ||
    type === TokenType.String
  )
}

export const isArythmeticOperator = (token: Token): boolean => {
  const [type, _value, _position] = token

  return (
    type === TokenType.Plus ||
    type === TokenType.Minus ||
    type === TokenType.Division ||
    type === TokenType.Multiplication ||
    type === TokenType.Power ||
    type === TokenType.StringConcat
  )
}

export const tokenize = (code: string) => {
  let tokens = []
  let remaining: string = code
  let line = 1
  let col = 1

  while (!!remaining) {
    const match = TokenDefinitions.find(def => def.regex.test(remaining))

    if (match) {
      const value = remaining.match(match.regex)[0]
      tokens.push([match.tokenType, value, `${line}:${col}`])

      if (match.tokenType === TokenType.Newline) {
        line++
        col = 1
      } else {
        col += value.length
      }

      remaining = remaining.substring(value.length)
    } else {
      col++
      remaining = remaining.substring(1)
    }
  }

  return tokens
}

// export const getTokenType = (token: string) => {
//   if (keywords.includes(token)) return TokenType.Keyword
//   if (operations.includes(token)) return TokenType.Operator
//   if (isNumber(token)) return TokenType.Number
//   if (isIndentifier(token)) return TokenType.Identifier
//   if (isFunction(token)) return TokenType.Function
//   if (isString(token)) return TokenType.String

//   throw new SyntaxError(
//     `Unknown identifier "${token}" in ${this.line}:${this.position}`
//   )
// }
