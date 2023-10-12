const fs = require('node:fs');

console.log('Leyendo el primer archivo...');
const text = fs.readFile('./texto.txt', 'utf-8');
console.log('primer texto:', text);

console.log('-----> Hacer cosas mientras lee el archivo....')

console.log('Leyendo el segundo archivo...');
const secondTexto = fs.readFile('./archivo2.txt', 'utf-8');
console.log('segundo texto:', text)