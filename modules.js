// console.log(arguments); //because we are in a function (export, require, module, filename, dirname)
// console.log(require("module").wrapper);

// module.exports
// const CalC = require("./test-module-1");
// const calc1 = new CalC();
// console.log(calc1.add(2, 5));

//exports
// const calc2 = require("./test-module-2");
// console.log(calc2.add(2, 5));

// const {add} = require("./test-module-2");
// console.log(add(2, 5));

//Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
