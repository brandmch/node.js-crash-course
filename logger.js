const EventEmitter = require('events')
const uuid = require('uuid')
const fs = require('fs')
const path = require('path')

class Logger extends EventEmitter {
    log(msg) {
        const num = uuid.v4()
        // Call event
        this.emit('message', { id: num, msg })

        // Appends file
        fs.appendFile(path.join('logged_logs.txt'), `Called listener: {${num}, ${msg}}`, err => {
            if (err) throw err
            console.log('File appended')
        })

    }
}

module.exports = Logger