const http = require('http')
const fs = require('fs')

const filePath = 'files/cats.txt'

const server = http.createServer((req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(req.url)
        res.write('<html>')
        res.write('<head>')
        res.write('<title>Hello world</title>')
        res.write('</head>')
        res.write(`<body><h1>Hello world</h1><hr><br><span>${data}</span></body>`)
        res.write('</html>')
        res.end()
    })
})

server.listen(504, '192.168.1.113');