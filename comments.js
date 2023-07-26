// Create web server with node.js
// 1. Create a web server
// 2. Create a request listener
// 3. Start the server

// 1. Create a web server
const http = require('http');
const port = 3000;
const hostname = 'localhost';
const server = http.createServer((req, res) => {
    // 2. Create a request listener
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// 3. Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});