import WebComponent from "./WebComponent"

describe.skip("WebComponent Module", () => {
  it("shoul", () => {
    const template = "Hi! my name is {{ name }} and I'm {{ age }} years old!"

    expect(WebComponent.html_2(template, { name: "chris", age: 25 })).toBe(3)
  })

  it("shoul", () => {
    const template = "{{ name }} test other layout {{age}}"

    expect(WebComponent.html_2(template, { name: "chris", age: 25 })).toBe(3)
  })
})
