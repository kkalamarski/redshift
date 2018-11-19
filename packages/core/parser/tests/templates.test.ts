import { compile } from "../redshift"

describe("Templates", () => {
  it("should parse template literals", () => {
    const code = `
      let template = "super template {{ name }}"

      WebComponent.html(template, { var = 5, on_update = (event) -> 3, name = "test", is_active = true })
    `

    const result = compile(code, false)

    expect(result).toContain("var: 5")
    expect(result).toContain("is_active: true")
    expect(result).toContain("on_update: event => 3")
  })
})
