#!/usr/bin/env node

import program from "commander"
import build from "./lib/build"
import watch from "./lib/watch"
import create from "./lib/create"
import serve from "./lib/serve"
import repl from "./lib/repl"

build(program)
watch(program)
create(program)
serve(program)
repl(program)

program.parse(process.argv)
