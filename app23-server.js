const net = require('net')
const readline = require('readline')

const server = net.createServer()
const port = 3500

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
})

server.on('connection', socket => {
  console.log('Client connected from', socket.remoteAddress, socket.remotePort)
  socket.write('Hello from the server!')

  socket.on('data', data => {
    console.log('Msg from client:', data.toString())
  })

  rl.prompt()
  rl.on('line', line => {
    socket.write(line)
    rl.prompt()
  })

  socket.on('close', err => {
    if (err) {
      console.log('Client disconnected due to error')
    } else {
      console.log('Client disconnected')
    }
  })
})

server.on('listening', () => {
  console.log('Server is listening on port', port)
})

server.listen(port)
