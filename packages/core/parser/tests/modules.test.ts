import { compile, evaluate } from "../../index"

describe.skip("Declaring modules", () => {
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

    expect(result).toContain("User.get =")
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

    expect(result).toContain("User.get =")
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

  it("should be possible to use module functions inside module", () => {
    const code = `
      defmodule User do
        def get() do
          1 + 3
        end

        def get(arg) do
          val = User.get()
          val + arg
        end
      end

      User.get(6)
    `

    const result = evaluate(code, true)

    expect(result).toBe(10)
  })

  it("should be possible to perform pattern matching", () => {
    const code = `
      defmodule SomeModule do
        def get("hello world") do
          "it is string hello world"
        end

        def get(6) do
          "it is 6"
        end

        def get(arg) do
          "unknown argument"
        end

        def get(arg1, arg2, 3) do
          "two unknown arguments"
        end
      end

      SomeModule.get(6)
    `

    const result = evaluate(code, true)

    expect(result).toBe("it is 6")
  })
})
