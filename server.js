const http = require('http');
const {type} = require('os');

const server = http.createServer((req,res) =>{
    console.log(req.url, req.method);
    res.setHeader('content-type', 'text/html');
    res.write('<h1>Enter details</h1>');
    res.write('<h1>Enter details</h1>');
    res.write('<h1>Enter details</h1>');

    res.end();
});
server.listen(3000, 'localhost', () =>{
    console.log('listening for request, port 3000');
});

function postData(){
    axios.post('')
}