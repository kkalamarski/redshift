import { evaluate } from "./../redshift"

describe("Expressions", () => {
  it("should parse an expression", () => {
    const code = "2 + 4"
    const result = evaluate(code)

    expect(result).toBe(6)
  })
})
