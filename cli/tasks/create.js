const fs = require("fs")
const chalk = require("chalk")
const path = require("path")
const generate = require("../../generator")

const build = (entry, options) => {
  const target = path.join(process.cwd(), entry)

  if (fs.existsSync(target)) {
    console.clear()
    console.log(
      chalk.bgRed("Error:"),
      chalk.red(`Directory ${target} already exists!`)
    )
  } else {
    generate(target)
  }
}

module.exports = build
