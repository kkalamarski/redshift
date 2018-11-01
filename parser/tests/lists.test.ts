import { evaluate } from "../redshift"
import { compile } from "./../redshift"
import { tokenize } from "../lib/lexer"

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
    expect(JSON.stringify(result, null, 2)).toBe(3)
  })
})
