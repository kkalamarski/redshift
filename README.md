# Redshift - functional programming language
Redshift is a functional programming language compiled to Javascript.
It implements syntax similiar to Elixir. It is created as a part of learning how do compilers work, and it's mostly just *proof of concept*.


## Supported Features
* Defining and calling functions
* Performing simple arithmetic operations
* Defining constants


## Syntax
### Defining Functions
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

### Calling functions
As for now the only way to call a function is to use parentheses
```elixir
sum(1, 2)
```

### Defining constants
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


