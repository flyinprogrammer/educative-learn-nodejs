var util = require('util')

const buff1 = Buffer.alloc(10)
console.log('buff1:', buff1)

const buff2 = Buffer.alloc(5, 15)
console.log('buff2:', buff2)

const buff3 = Buffer.allocUnsafe(10)
console.log('buff3:', buff3)

buff3.fill(1)
console.log('buff3.fill(1):', buff3)

buff2.write('abcdef')
console.log("buff2.write('abcdef'):", buff2)

const buff4 = Buffer.from([255, 257, 265, 6.5, -255, '7'])
console.log('buff4:', buff4)

const buff5 = Buffer.from('Hello world')
console.log('buff5:', buff5)
console.log(`util.inspect(buff5): ${util.inspect(buff5)}`)
console.log('buff5.toString():', buff5.toString())
