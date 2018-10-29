# Redshift - functional programming language

[![CircleCI](https://circleci.com/gh/kkalamarski/redshift/tree/master.svg?style=svg)](https://circleci.com/gh/kkalamarski/redshift/tree/master)
Redshift is a functional programming language compiled to Javascript.
It implements syntax similiar to Elixir. It is created as a part of learning how do compilers work, and it's mostly just _proof of concept_.

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

Redshift takes note of the arity of the function (number of arguments), so it is possible to declare functions with same name, but different arity.
For example following code is valid

```elixir
def sum(a) do
  a + a
end

def sum(a, b) do
  a + b
end
```

### Function calls

As for now the only way to call a function is to use parentheses

```elixir
sum(1, 2)
```

### Constants

Because of lack of mutations, redshift supports constants only.
Constants are block scoped.

```elixir
test_constant = 2
result = 2 * 3
```

Constants can also be used inside functions

```elixir
def func() do
  a = 40
  b = 100

  a + b
end
```

### String literals

String literals are declared using double quotes `"`.

```elixir
hello_world = "Hello world!"
```

To concat two strings use concatenation operator `<>`.

```elixir
str1 = "Hello "
str2 = "world!"

result = str1 <> str2
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

### Modules

Module is a namespace for the functions serving similiar purpose.
Examples of built-in modules are:

`Math` - contianing functions for arythmetic operations

`IO` - containig functions for managind input and output

To decalre custom module `defmodule / end` notation is used.

```elixir
defmodule User do

  def get_user() do
    # some logic
  end

  def delete_user() do
    # some logic
  end
end
```

Module is always 'default' exported. That is why it is only possible to have one module per file.
