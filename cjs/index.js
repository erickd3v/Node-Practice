// todas las propiedades como "console.log, Promise, fetch, DOM, global" sale de la variable >> globalThis <<
/* globalThis.console.log("hola"); */


// CommonJS Require Module
const {sum} = require('./sum')

console.log(sum(1,2))