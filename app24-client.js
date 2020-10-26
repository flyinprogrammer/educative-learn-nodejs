const dgram = require('dgram')

const client = dgram.createSocket('udp4')

client.send('Hello from client', 3500, 'localhost', err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Message sent to server')
})

client.on('message', data => {
  console.log('Msg from server:', data.toString())
  client.close()
})

client.on('close', () => {
  console.log('closed socket to server')
})
