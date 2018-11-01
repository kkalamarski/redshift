import { tokenize, TokenType } from "../lib/lexer"

describe("Lists", () => {
  it("should be possible to use List literal", () => {
    const code = `
      names = [
        "mark",
        "tom",
        "jane"
      ]

      names
    `

    const result = tokenize(code)

    expect(result.filter(t => t[0] === TokenType.ListOpen).length).toBe(1)
    expect(result.filter(t => t[0] === TokenType.ListClose).length).toBe(1)
    expect(result.filter(t => t[0] === TokenType.String).length).toBe(3)
  })
})
