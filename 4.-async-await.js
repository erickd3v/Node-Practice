// Esto sólo en módulos nativos que no tienen promesas nativas.

// const { promisify } = require('node:util');
// const readFilePromise =  promisify(fs.readFile);

const fs = require('node:fs/promises');

async function init() {
    console.log('Leyendo el primer archivo...');
    const text = await fs.readFile('./texto.txt', 'utf-8');
    console.log('primer texto:', text)

    console.log('-----> Hacer cosas mientras lee el archivo....')

    console.log('Leyendo el segundo archivo...');
    const secondText = await fs.readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto:', secondText);
}

init();

// IIFE - Inmediatly Invoked Function Expression
// ( 
//     async () => {
        // console.log('Leyendo el primer archivo...');
        // const text = await fs.readFile('./texto.txt', 'utf-8');
        // console.log('primer texto:', text)

        // console.log('-----> Hacer cosas mientras lee el archivo....')

        // console.log('Leyendo el segundo archivo...');
        // const secondText = await fs.readFile('./archivo2.txt', 'utf-8')
        // console.log('segundo texto:', secondText);
//     }
// )()