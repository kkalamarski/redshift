const compile = require("../redshift")

describe("Import statements", () => {
  it("should create an internal import", () => {
    const code = `import Math`
    const result = compile(code)

    expect(result).toContain(`const Math = require("core/Math")`)
  })

  it("should create internal, aliased import", () => {
    const code = `import Math as M`
    const result = compile(code)

    expect(result).toContain(`const M = require("core/Math")`)
  })

  it("should create external, aliased import", () => {
    const code = `import "lodash" as _`
    const result = compile(code)

    expect(result).toContain(`const _ = require("lodash")`)
  })

  it("should create external import of another file", () => {
    const code = `import "./Test.rs" as Test`
    const result = compile(code)

    expect(result).toContain(`const Test = require("./Test.rs")`)
  })
})
