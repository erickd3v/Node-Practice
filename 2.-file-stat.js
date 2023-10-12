const fs = require("node:fs"); // a partir de Node 16, se recomienda poner nos: antes del modulo.

const stats = fs.statSync("./texto.txt");

console.log(
  stats.isFile(), // si es un fichero.
  stats.isDirectory(), // si es un directorio.
  stats.isSymbolicLink(), // si es un enlace simbólico.
  stats.size // tamaño en bytes.
);
