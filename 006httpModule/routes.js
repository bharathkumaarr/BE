const http = require('http');

const server = http.createServer((req,res)=> {
    const url = req.url;
    if (url==='/'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('home page');
    } 
    else if (url==='/projects') {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('projects page');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('page not found');
    }
})

const port = 3001;

server.listen(port,()=> {
    console.log(`server is listening in port ${port}`);
})