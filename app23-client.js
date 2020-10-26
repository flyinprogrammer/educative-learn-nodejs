const net = require('net')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
})

const client = net.connect({ port: 3500 }, _ => {
  console.log('Connection established')
  client.write('Hello from client')
})

client.on('data', data => {
  console.log('Msg from server:', data.toString())
})

client.on('end', _ => {
  console.log('disconnected from server')
})

rl.prompt()
rl.on('line', line => {
  client.write(line)
  rl.prompt()
})
