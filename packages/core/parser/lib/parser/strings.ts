import { tokenize } from "./../lexer"
import { TemplateLiteral, TemplateElement } from "./ast"
import Parser from "../parser"
import Maybe from "./../../../core/Maybe"

export const parseString = (string: String): TemplateLiteral => {
  const expressions = Maybe.of(string.match(/{{[^}]*}}/gi))
    .valueOrElse([])
    .map(str => str.replace("{{", "").replace("}}", ""))
    .map(str => tokenize(str))
    .map(tokens => {
      const parser = new Parser(tokens)

      return parser.parse(false)[1]
    })

  const text = string
    .replace(/"/g, "")
    .replace(/{{[^}}]*}}/gi, "---||---")
    .split("---||---")
    .map(el => new TemplateElement(el))

  return new TemplateLiteral(expressions, text)
}
