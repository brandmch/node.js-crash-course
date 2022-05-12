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

// const Logger = require('./Logger')
// const fs = require('fs')
// const path = require('path')

// const logger = new Logger()

// logger.on('message', (data) => {


//     console.log('Called listener: ', data)
// })

// for (let i = 0; i < 100; i++) {
//     logger.log(`${i}`)
// }