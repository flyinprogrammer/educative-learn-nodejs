const readline = require('readline')

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let tries = 3

const randomNumber = getRandomIntInclusive(1, 10)

rl.setPrompt('Guess the number! (1 - 10): ')
rl.prompt()

function game (tries, randomNumber, guess) {
  if (tries > 0) {
    if (guess === randomNumber) {
      console.log('WINNER')
      process.exit(0)
    } else if (guess > randomNumber) {
      console.log('TOO HIGH')
    } else if (guess < randomNumber) {
      console.log('TOO LOW')
    } else {
      console.log('NOT A NUMBER')
    }
  } else {
    if (guess === randomNumber) {
      console.log('WINNER')
    } else {
      console.log(`YOU LOSE! THE NUMBER WAS: ${randomNumber}`)
    }
    process.exit(0)
  }
}

rl.on('line', guess => {
  tries--
  game(tries, randomNumber, guess)
  rl.prompt()
})
