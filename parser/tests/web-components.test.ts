import { compile } from "../redshift"
import { tokenize } from "../lib/lexer"

describe("Web Components", () => {
  it("should parse", () => {
    const code = `
      defmodule App do
        def main() do
          update = fn(state) -> App.update(state) end
          template = fn(render, state) -> App.template(render, state) end
          
          WebComponent.of("redshift-app", update, template)
        end
      
        def update(state) do
          new_state = state.set("name", "Chris")
      
          new_state
        end
      
        def template(render, state) do 
          name = state.get("name")

          render ~ "Hello, my name is {name}"
        end
      end

      App.main()
    `

    const result = compile(code)

    expect(result).toContain("redshift-app")
  })
})
