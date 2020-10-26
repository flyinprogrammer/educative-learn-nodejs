console.log('This is the first message')

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code:', code)
})

process.on('exit', (code) => {
  setTimeout(() => { console.log('This will not work.') }, 0)
  console.log('Process exit event with code:', code)
})

console.log('This is the second message')

// https://nodejs.org/api/process.html#process_event_beforeexit
// The 'beforeExit' event is not emitted for conditions causing explicit termination, such as calling process.exit() or uncaught exceptions.
// The 'beforeExit' should not be used as an alternative to the 'exit' event unless the intention is to schedule additional work.

// process.exit();
