import { compile } from "../redshift"
import { tokenize } from "../lib/lexer"

describe("Web Components", () => {
  it("should parse", () => {
    const code = `
      defmodule App do
        def main() do
          WebComponent.of("redshift-app", App.model, App.template)
        end
      
        def model() do
          new_state = state.set("name", "Chris")
      
          new_state
        end
      
        def template(state) do 
          name = state.get("name")
      
          WebComponent.html ~ "
            <h2>Hello, my name is {{name}}</h2>
          "
        end
      end

      App.main()
    `

    const result = compile(code)

    expect(result).toContain("redshift-app")
  })
})
