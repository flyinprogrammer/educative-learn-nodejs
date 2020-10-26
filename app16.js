const fs = require('fs')
const fileName = 'test.txt'

fs.stat(fileName, (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  fs.open(fileName, 'r', (err1, fd) => {
    const buffer = Buffer.alloc(stats.size)

    fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
      if (err) {
        console.error(err)
        return
      }
      const data = buffer.toString('utf8', 0, buffer.length)
      console.log(data)
      fs.close(fd, (err) => {
        if (err) {
          console.error(err)
        }
      })
    })
  })
})
