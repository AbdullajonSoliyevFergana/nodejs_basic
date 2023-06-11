const { readFile, writeFile } = require('fs')
console.log('started a firt task')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('complete first task')
})
console.log('starting next task')
