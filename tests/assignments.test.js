const compile = require("../interpreter")

describe("Assignments", () => {
  it("should assign to variable", () => {
    const code = `
            test = 2 + 1
            test
          `
    const result = compile(code, true)

    expect(result).toBe(3)
  })

  it("should be possible to use variable in assignation", () => {
    const code = `
        test = 2 + 1
        test2 = test * 4
        test2
    `
    const result = compile(code, true)

    expect(result).toBe(12)
  })

  it("should be possible to assign literal to variable", () => {
    const code = `
        test = 2
        test2 = 5
        test2 + test
    `
    const result = compile(code, true)

    expect(result).toBe(7)
  })

  it("should not be possible to mutate a variable", () => {
    const code = `
        test = 2 + 1
        test = test + 1
        test
    `

    expect(() => {
      compile(code, true)
    }).toThrow()
  })
})
