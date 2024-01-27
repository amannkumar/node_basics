// Built in module in node js
const os = require('os')

//info about current user
console.log(os.userInfo())

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

//more useful data using os
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)