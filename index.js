const http = require('http')
const path = require('path')
const fs = require('fs')
const food = require('./data.json')

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        })

    }

    if (req.url === '/about') {

        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        })

    }
    if (req.url == '/data') {
        res.writeHead(200, 'application/json')
        res.end(JSON.stringify(food))
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))