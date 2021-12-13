const util = require('util')

async function fn() {
    return "Hello Si!"
}

const callbackFunction = util.callbackify(fn)

callbackFunction((err, ret) => {
    if(err) throw err
    console.log(ret)
})

function fn1() {
    return Promise.reject(null)
}

const callbackFunction1 = util.callbackify(fn1)

callbackFunction1((err, ret) => {
// 当Promise 被以 "null" 拒绝时，它被包装为 Error 并且原始值存储在 "reason" 中。
let x = err && err.hasOwnProperty('reason') && err.reason === null
console.log(x)
})

function Person() {
    this.name = 'Si'
    this.toString = function() {
        return this.name
    }
}

const obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj, true))