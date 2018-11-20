import fs from "fs"
import path from "path"

const main = target => `import "@redshift/dom" as RedshiftDOM

RedshiftDOM.render("root", {
  model = 1,
  view = (state) -> RedshiftDOM.h1({ style = "text-align: center;" }, ["Hello world!"]),
  update = (state, action) -> state 
})
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
    <div id="root"></div>

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

      dependencies: {
        "@redshift/core": require("../package.json").version,
        "@redshift/dom": require("../package.json").version
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

  fs.mkdirSync(path.join(target, "bin"))
}

export default generate
