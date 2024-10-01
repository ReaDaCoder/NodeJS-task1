
const http = require('http');
const {type} = require('os');

const server = http.createServer((req,res) =>{
    res.writeHead(200, { 'Content-Type': 'text-plain' });
 
    const url = req.url;
 
    if (url === '/about' && req.method === "GET") {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }

    if (url === '/about' && req.method === "POST") {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }

    if (url === '/about' && req.method === "PUT") {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }


});

server.listen(3001, 'localhost', () =>{
    console.log('listening for request, port 3000');
});

