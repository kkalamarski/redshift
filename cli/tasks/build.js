const fs = require("fs")
const bundle = require("../../bundler/index")
const chalk = require("chalk")

const build = (entry, options) => {
  console.clear()
  console.log(chalk.black.bgGreen("Starting Build"))
  try {
    const javascript = bundle(entry)
    const defaultOutput = "./bin/bundle.js"

    if (options.eval) {
      console.log(chalk.black.bgGreen("Evaluating bundle"))

      console.log(eval(javascript))
    } else if (options.output) {
      fs.writeFileSync(options.output, javascript)
      console.log(
        chalk.black.bgGreen(`Successfully compiled to ${options.output}`),
        options.output
      )
    } else {
      fs.writeFileSync(defaultOutput, javascript)
      console.log(
        chalk.black.bgGreen(`Successfully compiled to ${defaultOutput}`)
      )
    }
  } catch (e) {
    console.log(chalk.white.bgRed("Error"))
    console.log(e)
  }
}

module.exports = build
