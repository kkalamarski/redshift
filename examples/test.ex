import IO
import Math as M
import "commander" as Commander
import "./imported.ex" as Imported

def func(a, b) do
    a + b
end

def write_name(name) do
    "Hello " <> name
end

func(3, 5)
write_name("Chris")
