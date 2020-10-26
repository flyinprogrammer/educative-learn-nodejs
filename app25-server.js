const dgram = require('dgram')
const readline = require('readline')

const server = dgram.createSocket('udp4')
const port = 3500

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
})

let clientSocket = 0

server.on('message', (msg, rinfo) => {
  console.log(`Msg from client (${rinfo.address}) at port: ${rinfo.port}: ${msg}`)
  clientSocket = rinfo.port
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

rl.prompt()
rl.on('line', line => {
  server.send(line, clientSocket, 'localhost')
  rl.prompt()
})
