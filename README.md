# Redshift - functional programming language

[![CircleCI](https://circleci.com/gh/kkalamarski/redshift/tree/master.svg?style=svg)](https://circleci.com/gh/kkalamarski/redshift/tree/master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
Redshift is a functional programming language compiled to Javascript.
It implements syntax similiar to Elixir. It is created as a part of learning how do compilers work, and it's mostly just _proof of concept_.

## Key concepts

- no mutations
- no `classes`, no `this`
- all functions must return

## Getting Started

### Installation

Install compiler via npm:

```bash
npm install -g redshiftlang
```

### Generating project files

Redshift provides CLI that helps with scaffolding code.

```bash
redshift create <project_name>
cd <project_name>
```

Once generated you can use npm scripts to run your application.

### REPL mode

```bash
redshift repl
```

### One time build

```bash
redshift build <path_to_file>.rh
```

### Watching for changes

```bash
redshift watch <path_to_file>.rh
```

Both options accept optional output argument (it defaults to `./bin/bundle.js`):

```bash
redshift build path/to/file.red -o dist/directory/build.js
```

## Syntax

### Function declaration

Functions are defined by use of `def/do/end` keywords.
The last expression will be returned.

```elixir
def sum(a, b) do
  a + b
end
```

### Function expressions

Redshift lets you define function expressions by using `->` syntax.
Expression after arrow will be returned.

To call anonymous function, dot syntax is used. This indicates that called function is an anonymous function and pattern matching should not be performed.

```elixir
let double = (a) -> a * 2

double.(2) # 4

let greeted = List.map(names, (name) -> "Hello " <> name <> "!")

```

### Constants

Because of lack of mutations, redshift supports constants only.
Constants are block scoped.

```elixir
let test_constant = 2
let result = 2 * 3
```

Constants can also be used inside functions

```elixir
let a = 5

def func() do
  let a = 40
  let b = 100

  a + b
end

a # 5
```

### Imports

There are three types of imports.

#### System Imports

Load built-in libraries like Math or IO

```elixir
import Math
import IO
```

#### Node Modules Imports

Load javascript module from `node_modules` directory

```elixir
import "lodash" as _
import "ramda" as R
```

#### Internal file imports

Load modules from another files (either `.rh` or `.js`)
File extension is required.

```elixir
import "./lib/Auth.rh" as Auth
import "./js/User.js" as User
```

### String literals

String literals are declared using double quotes `"`.

```elixir
let hello_world = "Hello world!"
```

To concat two strings use concatenation operator `<>`.

```elixir
let str1 = "Hello "
let str2 = "world!"

let result = str1 <> str2
```

### List Literals

Lists are declared using square parentheses `[]`.

```elixir
let names = ["tom", "mark", "andrew"]
```

To concat two lists use concatenation operator `++`.

```elixir
let names = ["tom", "mark", "adam"]
let other_names = ["anna", "kasia", "ewelina"]

let all = names ++ other_names
```

To perform more advanced operations like mapping, reducing, filtering and searching use List module

```elixir
import List

let numbers = [1, 2, 3]
let double = (num) -> num * 2

let doubled = List.map(numbers, double)

## Head | Tail
let head = List.head(numbers) # 1
let tail = List.tail(numbers) # [2, 3]
```
