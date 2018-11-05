import { tokenize, TokenType } from "../lib/lexer"
import { compile, evaluate } from "./../redshift"

describe("Lists", () => {
  it("should be possible to use List literal", () => {
    const code = `
      names = [
        "mark",
        "tom",
        "jane",
        5
      ]

      names
    `

    const result = tokenize(code)

    expect(result.filter(t => t[0] === TokenType.ListOpen).length).toBe(1)
    expect(result.filter(t => t[0] === TokenType.ListClose).length).toBe(1)
    expect(result.filter(t => t[0] === TokenType.String).length).toBe(3)
    expect(result.filter(t => t[0] === TokenType.Number).length).toBe(1)
  })

  it("should parse a List into array", () => {
    const code = `["test", 5]`
    const result = evaluate(code)

    expect(result.length).toBe(2)
  })

  it("should be possible to store array in a constant", () => {
    const code = `
    names = ["tom", "mark", "adam"]

    names
    `
    const result = evaluate(code)

    expect(result.length).toBe(3)
  })

  it("should be possible to use array concat operator", () => {
    const code = `
    names = ["tom", "mark", "adam"]
    other_names = ["anna", "kasia", "ewelina"]

    all = names ++ other_names

    all
    `
    const result = evaluate(code)

    expect(result.length).toBe(6)
  })

  it("should be possible to use array concat operator for multiple lists", () => {
    const code = `
    names = ["tom", "mark", "adam"]
    other_names = ["anna", "kasia", "ewelina"]
    yet_another_names = ["markus", "kicałek", "mariusz"]

    all = names ++ other_names ++ yet_another_names

    all
    `
    const result = evaluate(code)

    expect(result.length).toBe(9)
  })
})
