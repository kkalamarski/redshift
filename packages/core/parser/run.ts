import { compile } from "./redshift"
const code = `"56" <> "32"`

console.log(compile(code))
