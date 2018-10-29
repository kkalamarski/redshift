const fs = require("fs")
const chalk = require("chalk")
const path = require("path")

const main = target => `import "./src/App.red" as App

App.main()
`

const app = target => `
import IO

defmodule App do
  def main() do
    IO.puts("Hello world!")
  end
end
`

const package = target =>
  JSON.stringify(
    {
      name: (t => t[t.length - 1])(target.split(path.sep)),
      version: "0.0.0",
      description: "Sample project for Redshift programming language.",
      main: "build/index.js",
      scripts: {
        start: "redshift watch main.rh",
        build: "redshift build main.rh"
      },

      dependencies: {
        redshiftlang: require("../package.json").version
      }
    },
    null,
    2
  )

const generate = target => {
  fs.mkdirSync(target)
  fs.writeFileSync(path.join(target, "main.rh"), main(target), "utf-8")
  fs.writeFileSync(path.join(target, "package.json"), package(target), "utf-8")

  fs.mkdirSync(path.join(target, "src"))
  fs.writeFileSync(path.join(target, "src/App.rh"), app(target), "utf-8")

  fs.mkdirSync(path.join(target, "test"))
}

module.exports = generate
