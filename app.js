const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.emit('response')

customEmitter.on('response', () => {
    console.log('data recieved')
})
customEmitter.on('response', () => {
    console.log('some other logic here')
})
