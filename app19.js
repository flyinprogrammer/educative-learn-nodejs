const os = require('os')

console.log('Arch:', os.arch(), '\n')
console.log('CPUs:', os.cpus(), '\n')
console.log('NICs', os.networkInterfaces(), '\n')
console.log('Platform', os.platform(), '\n')
console.log('Release', os.release(), '\n')
console.log('User info', os.userInfo(), '\n')
