const keywords = ["let"]
const operations = ["+", "-", "*", "/"]

const isFunctionDeclaration = t => t.includes("()")
const isNumber = t => /\d/.test(t)

const getTokenType = token => {
  if (keywords.includes(token)) return "VariableDeclaration"
  if (operations.includes(token)) return "BinaryExpression"
  if (isFunctionDeclaration(token)) return "VariableDeclarator"
  if (isNumber(token)) return "NumericLiteral"

  return "identifier"
}

module.exports = str =>
  str.split(";").map(lines =>
    lines
      .split(" ")
      .map(s => s.trim())
      .filter(s => s.length)
      .map(s => [getTokenType(s), s])
  )
