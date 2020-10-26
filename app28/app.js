const http = require('http')
const fs = require('fs')

const hostname = '0.0.0.0'
const port = 3500

const homePage = fs.readFileSync('main.html')
const aboutPage = fs.readFileSync('about.html')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  if (req.url === '/') {
    res.write(homePage)
  } else if (req.url === '/about') {
    res.write(aboutPage)
  } else if (req.url.match(/images/g)) {
    try {
      res.setHeader('Content-Type', 'image/jpeg')
      const imgLoc = req.url.replace('/', './')
      const image = fs.readFileSync(imgLoc)
      res.write(image)
    } catch {
      res.statusCode = 404
      console.log(`return 404: ${req.url}`)
    }
  } else {
    res.statusCode = 404
    console.log(`return 404: ${req.url}`)
  }
  res.end()
})

server.listen(port, hostname, () => {
  console.log('Server is now running')
})
