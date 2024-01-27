//modules
const names=require('./3-names')
const sayHi = require('./4-utils')
const data = require('./5-alternative-flavor') 

sayHi('susan')
sayHi(names.peter)
sayHi(names.john)
console.log(data)