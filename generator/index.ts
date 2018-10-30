import fs from "fs"
import path from "path"

const main = target => `import "./src/App.rh" as App

App.main()
`

const app = target => `import IO

defmodule App do
  def main() do
    IO.puts("Hello world!")
  end
end
`

const html = () => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Hello world!</h1>

    <script src="bin/bundle.js"></script>
</body>

</html>`

const pkg = target =>
  JSON.stringify(
    {
      name: (t => t[t.length - 1])(target.split(path.sep)),
      version: "0.0.0",
      description: "Sample project for Redshift programming language.",
      main: "bin/index.js",
      scripts: {
        start: "redshift serve main.rh",
        watch: "redshift watch main.rh",
        build: "redshift build main.rh"
      },

      dependencies: {
        redshiftlang: require("../../package.json").version
      }
    },
    null,
    2
  )

const gitignore = () => `node_modules
bin
`

const generate = target => {
  fs.mkdirSync(target)
  fs.writeFileSync(path.join(target, ".gitignore"), gitignore(), "utf-8")
  fs.writeFileSync(path.join(target, "index.html"), html(), "utf-8")
  fs.writeFileSync(path.join(target, "main.rh"), main(target), "utf-8")
  fs.writeFileSync(path.join(target, "package.json"), pkg(target), "utf-8")

  fs.mkdirSync(path.join(target, "src"))
  fs.writeFileSync(path.join(target, "src/App.rh"), app(target), "utf-8")

  fs.mkdirSync(path.join(target, "bin"))
}

export default generate
