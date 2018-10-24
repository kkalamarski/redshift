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

  it("should concat two strings", () => {
    const code = `
        str = "hello " <> "world!"
        str
      `

    const result = compile(code, true)
    expect(result).toBe("hello world!")
  })

  it("should concat two strings from variables", () => {
    const code = `
        str = "hello "
        world = "world!"
        result = str <> world
        result
      `

    const result = compile(code, true)
    expect(result).toBe("hello world!")
  })

  it("should be possible to pass string to function as argumnet", () => {
    const code = `
        def greet(name) do
            "Hello " <> name
        end

        greet("Chris")
    `

    const result = compile(code, true)
    expect(result).toBe("Hello Chris")
  })
})
