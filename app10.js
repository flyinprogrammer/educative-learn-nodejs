const EventEmitter = require('events')

const myEmitter = new EventEmitter()

const someFunction = function () {
  console.log('Something has happened!')
}
myEmitter.on('Some event', someFunction)
myEmitter.emit('Some event')
myEmitter.emit('Some event')
myEmitter.emit('Some event')
