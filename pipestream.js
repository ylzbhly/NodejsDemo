const fs = require('fs')

const readerStream = fs.createReadStream('input.txt')

const writerStream = fs.createWriteStream('output1.txt')

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream)

console.log("程序执行完毕")