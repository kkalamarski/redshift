import compile from "../redshift"

describe("Expressions", () => {
  it("should parse an expression", () => {
    const code = "2 + 4"
    const result = compile(code, true)

    expect(result).toBe(6)
  })
})
