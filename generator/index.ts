import fs from "fs"
import path from "path"

const main = target => `import "./src/App.rh" as App

App.main()
`

const app = target => `import WebComponent

defmodule App do
  def main() do
    update = fn(state) -> App.update(state) end
    template = fn(render, state) -> App.template(render, state) end

    WebComponent.of("rh-app", update, template)    
  end

  def update(state) do
    new_state = state.set("name", "Redshift")

    new_state
  end

  def template(render, state) do 
    name = state.get("name")

    render ~ "
      <style>
        :host {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
        }

        h1 { 
          color: #ffffff;
          font-size: 3em;
          text-align: center;
          padding: 200px;
          margin: 0;

          background: #C02425;
          background: -webkit-linear-gradient(to right, #F0CB35, #C02425); 
          background: linear-gradient(to right, #F0CB35, #C02425);
        }

        h2 {
          padding: 25px;
          text-align: center;
          font-size: 2em;
          font-weight: normal;      
          background: #C02425;
          color: #FFFFFF;
          margin: 0;
        }

        p {
          text-align: center;
          font-size: 1.5em;
        }

        a {
          display: block;
          text-align: center;
          color: #C02425;
          text-decoration: none;
          font-size: 1.5em;
        }

      </style>
      <h1>Welcome to the {{ name }} app!</h1>
      <h2>This is a base template for Redshift web applications</h2>
      <p>Start editing in /src/App.rh.</p>
      <p> -- or -- </p>
      <a href='https://github.com/kkalamarski/redshift'>Visit Github Page</a>
    "
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
    <rh-app></rh-app>

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
