const Logger = require('./Logger')
const fs = require('fs')
const path = require('path')

const logger = new Logger()

logger.on('message', (data) => {


    console.log('Called listener: ', data)
})

for (let i = 0; i < 100; i++) {
    logger.log(`${i}`)
}