#!/usr/bin/env node
const program = require("commander")
const build = require("./cli/build")(program)
const watch = require("./cli/watch")(program)
const create = require("./cli/create")(program)
const serve = require("./cli/serve")(program)

program.parse(process.argv)
