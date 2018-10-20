const lex = require("./lib/lexer")
const parse = require("./lib/parser")
const transpile = require("./lib/transpiler")
const babel = require("@babel/core")

const programm = `
    let sum() 2 * 3;
    let anotherSum() 8 + 6;

    anotherSum();
`
console.clear()
const lexed = lex(programm)
console.table(lexed)
const parsed = parse(lexed)

console.log(JSON.stringify(parsed, null, 2))

const { code } = babel.transformFromAst(parsed, null, {
  presets: ["@babel/preset-env"]
})

console.log(code)

// const result = transpile(parsed)

// console.log(programm, " => ", result, " => ", eval(result))
