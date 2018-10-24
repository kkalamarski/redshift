# Redshift - functional programming language

Redshift is a functional programming language compiled to Javascript.
It implements syntax similiar to Elixir. It is created as a part of learning how do compilers work, and it's mostly just _proof of concept_.

## Supported Features

- Defining and calling functions
- Performing simple arithmetic operations
- Defining constants

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

Load modules from another files (either `.rs` or `.js`)
File extension is required.

```elixir
import "./lib/Auth.rs" as Auth
import "./js/User.js" as User
```
