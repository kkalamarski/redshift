import { compile, evaluate } from "./../redshift"

describe("Lists", () => {
  it("should parse a List into array", () => {
    const code = `["test", 5]`
    const result = evaluate(code)

    expect(result.length).toBe(2)
  })

  it("should be possible to store array in a constant", () => {
    const code = `
    let names = ["tom", "mark", "adam"]

    names
    `
    const result = evaluate(code)

    expect(result.length).toBe(3)
  })

  it("should be possible to use array concat operator", () => {
    const code = `
    let names = ["tom", "mark", "adam"]
    let other_names = ["anna", "kasia", "ewelina"]

    let all = names ++ other_names

    all
    `
    const result = evaluate(code)

    expect(result.length).toBe(6)
  })

  it("should be possible to use array concat operator for multiple lists", () => {
    const code = `
    let names = ["tom", "mark", "adam"]
    let other_names = ["anna", "kasia", "ewelina"]
    let yet_another_names = ["markus", "kicałek", "mariusz"]

    let all = names ++ other_names ++ yet_another_names

    all
    `
    const result = evaluate(code)

    expect(result.length).toBe(9)
  })

  it("should be possible to return list literal in function return", () => {
    const code = `
    let get_numbers = () -> [1, 2, 3]

    def get_names(name) do
      [name, "mark", "adam"]
    end

    `
    const result = compile(code)

    expect(result).toContain("return [1, 2, 3]")
  })
})
