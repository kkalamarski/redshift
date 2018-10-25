#!/usr/bin/env node
const program = require("commander")
const build = require("./cli/build")(program)
const watch = require("./cli/watch")(program)

program.parse(process.argv)
