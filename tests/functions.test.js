const compile = require("../interpreter")

describe("Functions", () => {
  it("should declare and execute a function", () => {
    const code = `
        def test() do
            2 + 4
        end

        test()
    `
    const result = compile(code, true)

    expect(result).toBe(6)
  })

  it("should return last expression", () => {
    const code = `
        def test() do
            100 + 60
            2 + 4
        end

        test()
    `
    const result = compile(code, true)

    expect(result).toBe(6)
  })

  it("should accept arguments", () => {
    const code = `
      def test(a, b) do 
        a + b
      end

      test(1, 2)
    `

    const result = compile(code, true)
    expect(result).toBe(3)
  })

  it("should be possible to declare consts in function body", () => {
    const code = `
      def test(a) do
        aVar = a + 4
        aVar + 4
      end

      test(5)
    `
    const result = compile(code, true)
    expect(result).toBe(13)
  })
})
