const net = require('net')

var server = net.createServer()
const port = 3500

server.on('connection', (socket) => {
  console.log('Client connected from', socket.remoteAddress, socket.remotePort)
  socket.write('Hello from server!')

  socket.on('data', (data) => {
    console.log('Msg from client', data.toString())
  })

  socket.on('close', (err) => {
    if (err) {
      console.log('Client disconnected due to err')
    } else {
      console.log('Client disconnected')
    }
  })
})

server.on('listening', () => {
  console.log('Server is listening on port', port)
})

server.listen(port)
