const net = require('net')
const client = net.connect({ port: 3500 }, () => {
  console.log('Connectoin established')
  client.write('Hello from client')
})

client.on('data', (data) => {
  console.log('Msg from server:', data.toString())
})

client.on('end', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('disconnected from server')
})
