const EventEmitter = require('events')

const myEmitter = new EventEmitter()

let n = 0
const someFunc = function () {
  n++
  console.log(`Value of n is: ${n}`)
}

myEmitter.once('event', someFunc)
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
