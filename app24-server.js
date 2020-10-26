const dgram = require('dgram')

const server = dgram.createSocket('udp4')
const port = 3500

server.on('message', (msg, rinfo) => {
  console.log(`Msg from client at port: ${rinfo.port}: ${msg}`)
  server.send('Hello from server', rinfo.port, 'localhost')
})

server.on('listening', () => {
  console.log('Server is listening on port', port)
})

server.on('close', err => {
  if (err) {
    console.log('Client disconnected due to error')
  } else {
    console.log('Client disconnected')
  }
  server.close()
})

server.bind(port)
