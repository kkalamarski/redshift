import { evaluate, compile } from "../redshift"

describe("Anonymous functions", () => {
  it("should be possible to declare annonymous function", () => {
    const code = `
      let multiply = (a, b) -> a * b
      multiply.(2, 5)
    `

    const result = evaluate(code)
    expect(result).toBe(10)
  })

  it("should be possible to call named function from anonymous function", () => {
    const code = `
      def mul(a, b) do
        a * b
      end

      let multiply = (a, b) -> mul(a, b)

      multiply.(2, 5)
    `

    const result = evaluate(code)
    expect(result).toBe(10)
  })

  it("should be possible to return anonymous function from anonymous function", () => {
    const code = `
      let multiply = (a, b) -> a * b 
      let power = (a) -> multiply.(a, a) 

      power.(2)
    `

    const result = evaluate(code)
    expect(result).toBe(4)
  })

  it("should be possible to pass anonymous functions around", () => {
    const code = `
      let multiply = (a, b) -> a * b

      def bigger_multiply(mul_fn) do
        mul_fn.(2, 5)
      end

      bigger_multiply(multiply)
    `

    const result = evaluate(code)
    expect(result).toBe(10)
  })

  it("should be possible to curry anonymous functions", () => {
    const code = `
      def curried(a, b) do
        () -> a * b
      end
    
      let fun = curried(5, 6)
      fun.()
    `

    const result = evaluate(code)
    expect(result).toBe(30)
  })
})
