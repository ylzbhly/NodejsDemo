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
const json = JSON.stringify(buf3)

console.log(json)

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value
})

console.log(copy)

const buffer1 = Buffer.from('w3cschool编程师')
const buffer2 = Buffer.from('www.w3cschool.cn')
const buffer3 = Buffer.concat([buffer1, buffer2])
console.log(buffer3.toString())

var result = buf.compare(buf3)
console.log(result)
console.log(buf.length)
console.log(buf1.length)
console.log(buf2.length)
console.log(buf3.length)