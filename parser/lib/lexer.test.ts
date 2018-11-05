import { tokenize, TokenType } from "./lexer"

describe("Lexer", () => {
  it("should tokenize numbers", () => {
    const code = `1 2.3 6`

    const result = tokenize(code)
    expect(result[0][0]).toBe(TokenType.Number)
    expect(result[1][0]).toBe(TokenType.Number)
    expect(result[1][1]).toBe("2.3")
    expect(result[2][0]).toBe(TokenType.Number)
  })

  it("should tokenize operators", () => {
    const code = ` + - / * = <> ++ ** -> =>`
    const [
      plus,
      minus,
      div,
      mul,
      eq,
      strConcat,
      listConcat,
      power,
      thinArrow,
      fatArrow
    ] = tokenize(code)

    expect(plus[0]).toBe(TokenType.Plus)
    expect(minus[0]).toBe(TokenType.Minus)
    expect(div[0]).toBe(TokenType.Division)
    expect(mul[0]).toBe(TokenType.Multiplication)
    expect(eq[0]).toBe(TokenType.Equals)
    expect(strConcat[0]).toBe(TokenType.StringConcat)
    expect(listConcat[0]).toBe(TokenType.ListConcat)
    expect(power[0]).toBe(TokenType.Power)
    expect(thinArrow[0]).toBe(TokenType.ThinArrow)
    expect(fatArrow[0]).toBe(TokenType.FatArrow)
  })

  it("should tokenize commas", () => {
    const code = `1, 2`
    const [_, comma] = tokenize(code)

    expect(comma[0]).toBe(TokenType.Comma)
  })

  it("should parse keywords", () => {
    const code = `defmodule def do end import as fn`
    const [defmodule, def, do_keyword, end, import_keyword, as, fn] = tokenize(
      code
    )

    expect(defmodule[0]).toBe(TokenType.DefModule)
    expect(def[0]).toBe(TokenType.Def)
    expect(do_keyword[0]).toBe(TokenType.Do)
    expect(end[0]).toBe(TokenType.End)
    expect(import_keyword[0]).toBe(TokenType.Import)
    expect(as[0]).toBe(TokenType.As)
    expect(fn[0]).toBe(TokenType.Fn)
  })

  it("should tokenize strings", () => {
    const code = `
      "dobule quoted text"
      'single quoted text'
    `

    const [nl_1, double, nl_2, single, nl_3, block] = tokenize(code)
    expect(double[0]).toBe(TokenType.String)
    expect(single[0]).toBe(TokenType.String)
  })

  it("should match identifiers", () => {
    const code = "variable Math.round"
    const [id, member] = tokenize(code)

    expect(id[0]).toBe(TokenType.Identifier)
    expect(member[0]).toBe(TokenType.MemberIdentifier)
  })

  it("should match parenthesess", () => {
    const code = "[ ] { } %{ } ( )"

    const result = tokenize(code)

    expect(result[0][0]).toBe(TokenType.ListOpen)
    expect(result[1][0]).toBe(TokenType.ListClose)
    expect(result[2][0]).toBe(TokenType.TupleOpen)
    expect(result[3][0]).toBe(TokenType.TupleClose)
    expect(result[4][0]).toBe(TokenType.MapClose)
    expect(result[5][0]).toBe(TokenType.TupleClose)
    expect(result[6][0]).toBe(TokenType.ParamsOpen)
    expect(result[7][0]).toBe(TokenType.ParamsClose)
  })
})
