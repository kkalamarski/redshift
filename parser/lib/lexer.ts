import split from "split-string"

export const TokenKind = {
  Keyword: Symbol("Keyword"),
  Operator: Symbol("Operator"),
  Number: Symbol("Number"),
  Identifier: Symbol("Identifier"),
  Function: Symbol("Function"),
  String: Symbol("String"),
  Token: Symbol("Token"),
  Newline: Symbol("Newline")
}

export const Keyword = {
  defmodule: Symbol("defmodule"),
  def: Symbol("def"),
  do: Symbol("do"),
  end: Symbol("end"),
  import: Symbol("import"),
  fn: Symbol("fn")
}

const keywords = Object.keys(Keyword)
const operations = ["+", "-", "*", "/", "=", "<>", "->", "=>"]
const tokens = ["[", "]", "{", "}", "%{"]

const isNumber = t => /^\d+(\.\d{1,2})?$/.test(t)
const isString = t => /^".*"$/
const isIndentifier = t => /^[$A-Z_][0-9A-Z_$]*$/i.test(t)
const isFunction = t => /[a-zA-z]*\.?[a-zA-Z]+\([^\)]*\)(\.[^\)]*\))?/.test(t)

export const tokenize = code => {
  const lines = code.split("\n")
  const tokens = lines.reduce(
    (acc, line, i) => acc.concat(parseLine(line, i)),
    []
  )
  return tokens
}

export const parseLine = (line, row) => {
  const tokens = split(line.trim(), {
    separator: " ",
    quotes: true,
    brackets: true
  })

  return tokens
    .filter(t => t.length)
    .map(s => {
      const type = this.getTokenType(s)
      const value = type === TokenKind.Keyword ? Keyword[s] : s

      return [type, value]
    })
    .concat([[TokenKind.Newline, "\n"]])
}

export const getTokenType = (token: string) => {
  if (keywords.includes(token)) return TokenKind.Keyword
  if (operations.includes(token)) return TokenKind.Operator
  if (isNumber(token)) return TokenKind.Number
  if (isIndentifier(token)) return TokenKind.Identifier
  if (isFunction(token)) return TokenKind.Function
  if (isString(token)) return TokenKind.String

  throw new SyntaxError(
    `Unknown identifier "${token}" in ${this.line}:${this.position}`
  )
}

export const createToken = (type, value) => {
  return {
    type,
    value
  }
}
