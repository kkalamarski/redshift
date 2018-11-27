import { compile } from "../../index"

describe("Import statements", () => {
  it("should create an internal import", () => {
    const code = `import Math`
    const result = compile(code, false)

    expect(result).toContain(`import * as Math from "core/Math"`)
  })

  it("should create internal, aliased import", () => {
    const code = `import Math as M`
    const result = compile(code, false)

    expect(result).toContain(`import * as M from "core/Math"`)
  })

  it("should create external, aliased import", () => {
    const code = `import "lodash" as _`
    const result = compile(code, false)

    expect(result).toContain(`import * as _ from "lodash"`)
  })

  it("should create external import of another file", () => {
    const code = `import "./Test.rs" as Test`
    const result = compile(code, false)

    expect(result).toContain(`import * as Test from "./Test.rs"`)
  })
})
