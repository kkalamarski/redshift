import { compile, evaluate } from "./../../index"

describe("Maps", () => {
  it("should be possible to assign map to a constant", () => {
    const code = `
      let test = { name = "chris", age = 25 }

      test
    `

    const result = evaluate(code)
    expect(result.name).toBe("chris")
    expect(result.age).toBe(25)
  })

  it("should be possible to return map from a function", () => {
    const code = `
      def get_user(id) do
        { id = id, name = "Chris", age = 25 }
      end

      get_user(4)
    `

    const result = evaluate(code)
    expect(result.id).toBe(4)
    expect(result.name).toBe("Chris")
    expect(result.age).toBe(25)
  })
})
