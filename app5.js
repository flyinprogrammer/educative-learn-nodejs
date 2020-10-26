var smallFunction = function () {
  console.trace('Let us look at the trace')
}

var bigFunction = function () {
  smallFunction()
}

bigFunction()
