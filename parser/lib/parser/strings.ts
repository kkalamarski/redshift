import { Token } from "../lexer"
import { tokenize } from "./../lexer"
import { TemplateLiteral, TemplateElement } from "./ast"
import Parser from "../parser"
import Maybe from "./../../../core/Maybe"

export const parseString = (string: Token): TemplateLiteral => {
  const [_type, value] = string

  const expressions = Maybe.of(value.match(/{[^}]*}/gi))
    .valueOrElse([])
    .map(str => str.replace("{", "").replace("}", ""))
    .map(str => tokenize(str))
    .map(tokens => {
      const parser = new Parser(tokens)

      return parser.parse(false)[1]
    })

  const text = value
    .replace('"', "")
    .replace(/{[^}]*}/gi, "---||---")
    .split("---||---")
    .map(el => new TemplateElement(el))

  return new TemplateLiteral(expressions, text)
}
