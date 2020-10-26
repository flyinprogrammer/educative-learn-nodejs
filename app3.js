const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const query = 'What is your name?\n'

rl.question(query, answer => {
  console.log(`Hello ${answer}!`)
  rl.close()
  console.log('Probably all done')
})
