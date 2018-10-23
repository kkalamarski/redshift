const compile = require("../redshift")

describe("Strings", () => {
  it("should parse string", () => {
    const code = `
        test = "a string"
        test
    `
    const result = compile(code, true)

    expect(result).toBe("a string")
  })
})
