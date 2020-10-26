const square = require('./square')
const Shape = require('./shape')

console.log('Area of the square is', square.area(5))
console.log('Perimeter of the square is', square.perimeter(5))

const myShape = new Shape('Hexagon', 6)
myShape.info()

console.log('The 5 squared:', square.square(5))
