import { Token } from "../lexer"
import { tokenize } from "./../lexer"
import {
  TemplateLiteral,
  TemplateElement,
  TemplateLiteralValue,
  Identifier
} from "./ast"
import Parser from "../parser"

export const parseString = (string: Token): TemplateLiteral => {
  const [_type, value] = string

  const expressions = value
    .match(/{[^}]*}/gi)
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
