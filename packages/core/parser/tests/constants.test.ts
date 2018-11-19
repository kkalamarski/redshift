import { compile, evaluate } from "../redshift"

describe("Constants", () => {
  it("should be possible to declare a constant", () => {
    expect(compile(`let test: Number = 5`, false)).toContain("const test = 5")
    expect(compile(`let test = 5`, false)).toContain("const test = 5")
    expect(compile(`let test = 5 + 7`, false)).toContain("const test = 5 + 7")
  })

  it("should be possible to assign a constant to constant", () => {
    const code = `
      let test: Number = 5
      let result: Number = test + 6

      result
    `

    expect(evaluate(code)).toBe(11)
  })
})
