import { compile } from "../redshift"
import { tokenize } from "../lib/lexer"

describe("Templates", () => {
  it("should parse template literals", () => {
    const code = `
      template = "super template"

      render ~ "hello from {template}"
    `

    const result = compile(code)

    expect(result).toContain("render`hello from ${template")
  })

  it("should parse template literals with functions", () => {
    const code = `
      render ~ "onclick={fn() -> template end}"
    `

    const result = compile(code)

    expect(result).toContain("render`onclick=${() => template")
  })
})
