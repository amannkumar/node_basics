
const path = require('path')

const filePath = path.join('content','subfolder','test.text')
const base= path.basename(filePath)
const absolute= path.resolve(__dirname, 'content','subfolder','test.txt')