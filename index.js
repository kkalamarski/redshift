#!/usr/bin/env node
const program = require("commander")
const fs = require("fs")
const compile = require("./parser/redshift")

const build = (entry, options) => {
  const entryFile = fs.readFileSync(entry, "utf-8")
  const javascript = compile(entryFile)

  if (options.eval) {
    console.log(eval(javascript))
  } else if (options.output) {
    fs.writeFileSync(options.output, javascript)
  } else {
    console.log(javascript)
  }
}

program
  .version("0.0.1")
  .command("build <entry>")
  .option("-o, --output [optional]", "path to output file")
  .option("-e, --eval", "evaluate the program without saving to filesystem")
  .action(build)

program.parse(process.argv)
