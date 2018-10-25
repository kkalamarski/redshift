const build = require("./tasks/build")

module.exports = program =>
  program
    .version("0.0.1")
    .command("build <entry>")
    .option("-o, --output [optional]", "path to output file")
    .option("-e, --eval", "evaluate the program without saving to filesystem")
    .action(build)
