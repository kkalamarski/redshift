import { evaluate, compile } from "./../redshift"

describe("Functions", () => {
  it("should declare and execute a function", () => {
    const code = `
        def test() do
            2 + 4
        end

        test()
    `
    const result = evaluate(code)

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
    const result = evaluate(code)

    expect(result).toBe(6)
  })

  it("should accept arguments", () => {
    const code = `
      def test(a, b) do 
        a + b
      end

      test(1, 2)
    `

    const result = evaluate(code)
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
    const result = evaluate(code)
    expect(result).toBe(13)
  })

  it("should be possible to return function call", () => {
    const code = `
      def test() do
        test(5)
      end

      def test(a) do
        a * a
      end

      test()
    `
    const result = evaluate(code)
    expect(result).toBe(25)
  })

  it("should be possible pass module function as a parameter", () => {
    const code = `
      test(Math.double, IO.puts("test"))
    `
    const result = compile(code)
    expect(result).toContain("Math.double")
    expect(result).toContain('IO.puts("test")')
  })

  it("should be possible to pass anonymous functions directly in parameters", () => {
    const code = `
      def test(value, func) do
        func(value)
      end

      doubled = test(5, fn(a) -> a * 2 end)
    `

    const result = compile(code)

    expect(result).toContain("a => a * 2)")
  })

  it("should be possible to span parameters across several lines", () => {
    const code = `
      def sum_all(a, b, c, d) do
        a + b + c + d
      end

      sum_all(
        1,
        2, 
        3,
        4
      )
    `

    const result = evaluate(code)

    expect(result).toBe(10)
  })
})
