const AST = {}

AST.BinaryExpression = (left, operator, right) => {
  return {
    type: "BinaryExpression",
    operator,
    left,
    right
  }
}

AST.ReturnStatement = argument => {
  return {
    type: "ReturnStatement",
    argument
  }
}

AST.ExpressionStatement = expression => {
  return {
    type: "ExpressionStatement",
    expression
  }
}

AST.CallExpression = (callee, args) => {
  return {
    type: "CallExpression",
    callee,
    arguments: args
  }
}

AST.AssignmentExpression = (left, right) => {
  return {
    type: "AssignmentExpression",
    operator: "=",
    left,
    right
  }
}

AST.ObjectExpression = properties => {
  return {
    type: "ObjectExpression",
    properties
  }
}

AST.MemberExpression = (object, property) => {
  return {
    type: "MemberExpression",
    object,
    property,
    computed: false
  }
}

AST.Block = body => {
  return {
    type: "BlockStatement",
    body
  }
}

AST.Function = (name, params, body) => {
  return {
    type: "FunctionDeclaration",
    id: name,
    params,
    body
  }
}

AST.FunctionExpression = (id, params, body) => {
  return {
    type: "FunctionExpression",
    generator: false,
    params,
    id,
    body,
    expression: false
  }
}

AST.Number = value => {
  return {
    type: "NumericLiteral",
    value: Number(value),
    raw: value
  }
}

AST.String = value => {
  return {
    type: "StringLiteral",
    value: value.replace(/"/g, ""),
    raw: value
  }
}

AST.Identifier = name => {
  return {
    type: "Identifier",
    name
  }
}

AST.VariableDeclaration = (id, initial, type) => {
  return {
    type: "VariableDeclaration",
    declarations: [
      {
        type: "VariableDeclarator",
        id,
        init: initial
      }
    ],
    kind: type || "const"
  }
}

AST.ImportDeclaration = (mod, local) => {
  return {
    type: "ImportDeclaration",
    specifiers: [
      {
        type: "ImportDefaultSpecifier",
        local
      }
    ],
    source: mod
  }
}

AST.ExportDefaultDeclaration = declaration => {
  return {
    type: "ExportDefaultDeclaration",
    declaration
  }
}

AST.Program = body => ({
  type: "File",
  program: {
    type: "Program",
    body,
    sourceType: "module",
    directives: []
  }
})

module.exports = AST
