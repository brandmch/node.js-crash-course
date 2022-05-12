const http = require('http')

// cCreate server object
http.createServer((req, res) => {
    res.write('Hello! uwu')
    res.end
})
    .listen(5000, () => console.log('Server running on port 5000...'))