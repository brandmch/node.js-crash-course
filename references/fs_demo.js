const fs = require('fs')
const path = require('path')

// // Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err
//     console.log('Folder created... ')
// })

// // Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello!', err => {
//     if (err) throw err
//     console.log('File written to...')

//     // Appends file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " ~~i love noodles uwu~~ ", err => {
//         if (err) throw err
//         console.log('File appended')
//     })
// })

// for (let i = 0; i < 100000; i++) {
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " ~~i love noodles uwu~~ ", err => {
//         if (err) throw err
//     })
// }

// // Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// // Rename file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hellojawn.txt'), (err, data) => {
//     if (err) throw err
//     console.log('file renamed............................................................................')
// })