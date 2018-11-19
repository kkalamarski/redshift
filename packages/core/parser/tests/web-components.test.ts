import { compile } from "../redshift"
import { tokenize } from "../lib/lexer"

describe("Web Components", () => {
  it("should parse", () => {
    const code = `
      import WebComponent

      def main() do
        let temp = "Hello, my name is {{ name }}"
      
        WebComponent.of(
          "redshift-app", 
          () -> { name = "Chris" }, 
          (state) -> WebComponent.html(template, { name = state.name })
        )    
      end
      
      main()
    `

    const result = compile(code)

    expect(result).toContain("redshift-app")
  })
})
