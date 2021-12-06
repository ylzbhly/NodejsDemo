// const 
const buf = Buffer.from('Si', 'utf8')

console.log(buf.toString())

console.log(buf.toString('hex'))

console.log(buf.toString('base64'))

console.log(buf.toString('utf8'))

const buf1 = Buffer.allocUnsafe(256)
len = buf1.write('www.w3cschool.cn')

console.log('写入字节数：' + len)

const buf2 = Buffer.alloc(26)
for(let i = 0; i < 26; i++) {
    buf2[i] = i + 97
}

console.log(buf2.toString('ascii'))
console.log(buf2.toString("ascii", 0, 5))
console.log(buf2.toString('utf8', 0, 5))
console.log(buf2.toString(undefined, 0, 26))

const buf3 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])
const json = buf3.toJSON()

console.log(json)