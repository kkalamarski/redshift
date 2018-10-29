
    (function(modules) {

        function require(id) {
            var mod = modules[id];
            var fn = mod[0];
            var map = mod[1];

            var module = { exports: {} };

            function localRequire(relativePath) {
                return require(map[relativePath]);
            }

            fn(localRequire, module, module.exports);

            return module.exports
        }

        require(0)

    })({0: [
        function(require, module, exports) { 
            "use strict";

function say_hello_a1(name) {
  return "Hello " + name;
}

say_hello_a1("World!"); 
        },
        {}
    ],})
  