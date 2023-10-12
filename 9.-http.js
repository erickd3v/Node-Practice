const http = require('node:http');
const { findAvailablePort } = require('./10.-free-port.js');

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola mundo');
});

// server.listen(3000, () => {
//     console.log('server listening on port http://localhost:3000');
// });

findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`);
    });
});

// // Si fuera el caso que el puerto que solicitamos esta en uso la alternativa seria lo siguiente:
// server.listen(0, () => {  // usa un puerto al azar que no se encuentre ocupado.
//     console.log(`server listening on port http://localhost:${server.address().port}`);
// });