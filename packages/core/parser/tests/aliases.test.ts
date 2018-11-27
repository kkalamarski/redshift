import { compile } from "../.."

describe.skip("Aliases", () => {
  it("should create alias", () => {
    expect(compile(`expose (puts) from IO`)).toContain("segbjsef")
  })
})
