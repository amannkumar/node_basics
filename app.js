//Calling mind grenade in main file
//require('./6-mind-grenade')

const {readFile,writeFilw} = require('fs')

readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
}) 