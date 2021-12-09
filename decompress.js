const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input1.txt'))

console.log('解压缩完成')