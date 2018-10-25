#!/usr/bin/env node
const program = require("commander")
const fs = require("fs")
const bundle = require("./bundler/index")
const chalk = require("chalk")

const build = (entry, options) => {
  console.clear()
  console.log(chalk.black.bgGreen("Starting Build"))
  const javascript = bundle(entry)

  try {
    if (options.eval) {
      console.log(eval(javascript))
    } else if (options.output) {
      fs.writeFileSync(options.output, javascript)
    } else {
      console.log(javascript)
    }
  } catch (e) {
    console.log(chalk.white.bgRed("Error"))
    console.log(e)
  }
}

program
  .version("0.0.1")
  .command("build <entry>")
  .option("-o, --output [optional]", "path to output file")
  .option("-e, --eval", "evaluate the program without saving to filesystem")
  .action(build)

program.parse(process.argv)
