#!/usr/bin/env node
import program from "commander"
import build from "./cli/build"
import watch from "./cli/watch"
import create from "./cli/create"
import serve from "./cli/serve"

build(program)
watch(program)
create(program)
serve(program)

program.parse(process.argv)
