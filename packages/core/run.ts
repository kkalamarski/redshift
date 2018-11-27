import { compile } from "./index"
const code = `
def sum(a, b) do
  a + b
end

def sum(a) do
  a + a
end

let one = sum(5)
let two = sum(1, 5)

List.map([1, 2, 3], (x) -> x * 2)
`

console.log(compile(code))
