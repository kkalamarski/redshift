import { compile, evaluate } from "./../redshift"

describe("Expressions", () => {
  it("should parse an expression", () => {
    expect(evaluate("2 + 4")).toBe(6)
  })

  it("should parse more complex expressions", () => {
    expect(evaluate("2 + 4 + 6")).toBe(12)
  })

  it("should operate on floats", () => {
    expect(evaluate("1.5 + 1.5")).toBe(3)
  })

  it("should work with precedence", () => {
    expect(evaluate("2 + 5 * 10")).toBe(52)
  })

  it("should work with strings", () => {
    expect(evaluate('"hello " <> "world!"')).toBe("hello world!")
  })

  it("should work with booleans", () => {
    expect(evaluate("true === true")).toBe(true)
    expect(evaluate("true === false")).toBe(false)
  })

  it("should work with logical expressions", () => {
    expect(evaluate("3 > 5")).toBe(false)
    expect(evaluate("3 === 3")).toBe(true)
    expect(evaluate("5 >= 3")).toBe(true)
  })
})
