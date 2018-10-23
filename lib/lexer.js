const split = require("split-string")
const keywords = ["def", "do", "end"]
const operations = ["+", "-", "*", "/", "="]

const isNumber = t => /^\d+(\.\d{1,2})?$/.test(t)
const isIndentifier = t => /^[$A-Z_][0-9A-Z_$]*$/i.test(t)
const isFunction = t => /[a-zA-Z]+\([^\)]*\)(\.[^\)]*\))?/.test(t)

class Lexer {
  constructor() {
    this.code = ""
    this.buffer = ""
    this.line = 0
    this.position = 0

    this.tokens = []
  }

  tokenize(code) {
    this.code = code
    const lines = code.split("\n")
    const tokens = lines.reduce(
      (acc, line, i) => acc.concat(this.parseLine(line, i)),
      []
    )

    this.tokens = tokens
    return this
  }

  parseLine(line, row) {
    this.line = row
    const tokens = split(line.trim(), { separator: " ", brackets: true })

    return tokens
      .filter(t => t.length)
      .map(s => [this.getTokenType(s), s])
      .concat([["newline", "\n"]])
  }

  getTokenType(token) {
    if (keywords.includes(token)) return "key"
    if (operations.includes(token)) return "op"
    if (isNumber(token)) return "num"
    if (isIndentifier(token)) return "id"
    if (isFunction(token)) return "fn"

    throw new SyntaxError(
      `Unknown identifier "${token}" in ${this.line}:${this.position}`
    )
  }

  createToken(type, value) {
    return {
      type,
      value
    }
  }
}

module.exports = Lexer
