const fs = require('fs')

const content = 'This is what will be written to to file synchronously'

try {
  fs.writeFileSync('test.txt', content)
  console.log('File written!')
} catch (err) {
  console.error(err)
}

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('read the data!')
  console.log(data)
})
