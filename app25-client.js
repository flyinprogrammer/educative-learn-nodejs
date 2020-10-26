const dgram = require('dgram')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
})

const client = dgram.createSocket('udp4')

const message = Buffer.from('Hello from client')
client.send(message, 3500, 'localhost', err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Message sent to server')
})

client.on('message', data => {
  console.log('Msg from server:', data.toString())
})

client.on('close', () => {
  console.log('disconnected from server')
})

rl.prompt()
rl.on('line', line => {
  client.send(line, 3500, 'localhost')
  rl.prompt()
})
