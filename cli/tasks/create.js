const fs = require("fs")
const chalk = require("chalk")
const path = require("path")
const generate = require("../../generator")

const build = (entry, options) => {
  const target = path.join(process.cwd(), entry)

  if (fs.existsSync(target)) {
    console.clear()
    console.log(
      chalk.bgRed(" Error "),
      chalk.red(`Directory ${target} already exists!`)
    )
  } else {
    console.log(chalk.black.bgGreen("Generating Redshift project..."))
    generate(target)
    console.log(chalk.black.bgGreen(" Scccess "))
    console.log(chalk.green(`Created new project at ${target}`))
    console.log(`Type \`cd ${entry} && npm start\` to start hacking!`)
  }
}

module.exports = build
