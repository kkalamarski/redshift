const compile = require("../redshift")

describe("Declaring modules", () => {
  it("should be possible to declare new module", () => {
    const code = `
      defmodule User do

      end
    `

    const result = compile(code)

    expect(result).toContain("const User = {}")
  })

  it("should be possible to declare functions in a module", () => {
    const code = `
      defmodule User do
        def get() do
          1
        end
      end
    `

    const result = compile(code)

    expect(result).toContain("User.get_a0 =")
  })

  it("should be possible to declare multiple functions in a module", () => {
    const code = `
      defmodule User do
        def get() do
          1
        end

        def get(s) do
          5
        end
      end
    `

    const result = compile(code)

    expect(result).toContain("User.get_a0 =")
    expect(result).toContain("User.get_a1 =")
  })

  it("should export the module", () => {
    const code = `
      defmodule User do
        def get() do
          1 + 3
        end

        def get(s) do
          5 + s
        end
      end
    `

    const result = compile(code)

    expect(result).toContain("export default User")
  })
})