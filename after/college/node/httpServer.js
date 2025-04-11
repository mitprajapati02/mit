const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('<h1> home page </h1>')
    }else if (req.url === '/about') {
        res.end('<h1> about page </h1>')
    }else{
    res.end('<h1> page not found </h1>')}
})

server.listen(8888, () => {
    console.log('server is running on port 8888');
})