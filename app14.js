const fs = require('fs')

const content = 'This is what will be written to the file'
const fileName = 'test.txt'
fs.writeFile(fileName, content, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('File written!')
})

fs.readFile(fileName, 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(data)
  console.log('File read!')
})
