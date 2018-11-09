import { tokenize, TokenType } from "../lib/lexer"
import { compile, evaluate } from "./../redshift"

describe("Maps", () => {
  it("should be possible to use Map literal", () => {
    const code = `
      person = %{
        name => "mark",
        age => 24,
        address => "Some street"
      }

      person
    `

    const result = tokenize(code)

    expect(result.filter(t => t[0] === TokenType.MapOpen).length).toBe(1)
    expect(result.filter(t => t[0] === TokenType.CurlyClose).length).toBe(1)
    expect(result.filter(t => t[0] === TokenType.String).length).toBe(2)
    expect(result.filter(t => t[0] === TokenType.Identifier).length).toBe(5)
    expect(result.filter(t => t[0] === TokenType.Number).length).toBe(1)
  })

  it("should be possible to assign map to a constant", () => {
    const code = `
      test = %{ name => "chris", age => 25 }

      test
    `

    const result = evaluate(code)
    expect(result.name).toBe("chris")
    expect(result.age).toBe(25)
  })

  it("should be possible to return map from a function", () => {
    const code = `
      def get_user(id) do
        %{ id => id, name => "Chris", age => 25 }
      end

      get_user(4)
    `

    const result = evaluate(code)
    expect(result.id).toBe(4)
    expect(result.name).toBe("Chris")
    expect(result.age).toBe(25)
  })
})
