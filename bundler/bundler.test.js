const bundle = require("./index")

describe("Bundler", () => {
  it("should bundle all files", () => {
    const result = bundle("examples/Imports.rh")

    expect(() => {
      eval(result)
    }).not.toThrow()
  })

  it("should bundle generated project files", () => {
    const result = bundle("examples/new_project/main.rh")

    expect(() => {
      eval(result)
    }).not.toThrow()
  })
})
