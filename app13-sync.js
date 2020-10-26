const fs = require('fs')

const fileName = 'foo.txt'

try {
  const data = fs.readFileSync(fileName, 'utf8')
  console.log(data)
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('File not found')
  } else {
    console.error(err)
  }
}

console.log('Hello!')
