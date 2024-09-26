const http = require('http');
const port = 3000

const server = http.createServer((req, res) => {
    console.log("received a request::",new Date())
    res.end('Hello from node server')
});

server.listen(port, 'localhost', () => {
    console.log('server is running on port ',port)
})