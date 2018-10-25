const fs = require("fs")
const build = require("./tasks/build")

const watch = (entry, options) => {
  build(entry, options)
  console.log("Waiting for file changes...")

  fs.watch(entry, {}, () => {
    build(entry, options)
    console.log("Waiting for file changes...")
  })
}

module.exports = program =>
  program
    .version("0.0.1")
    .command("watch <entry>")
    .option("-o, --output [optional]", "path to output file")
    .action(watch)
