const Event = require('events').EventEmitter

const emitter = new Event()

const listener1 = () => console.log('监听器1执行')

const listener2 = () => console.log('监听器2执行')

let eventListeners = emitter.listenerCount('connection')
console.log(eventListeners + ' 个监听器监听连接事件。')

emitter.addListener('connection', listener1)

emitter.on('connection', listener2)

eventListeners = emitter.listenerCount('connection')
console.log(eventListeners + ' 个监听器监听连接事件。')

emitter.emit('connection')

eventListeners = emitter.listenerCount('connection')
console.log(eventListeners + ' 个监听器监听连接事件。')

emitter.removeListener('connection', listener1)
console.log("listener1 不再受监听")

eventListeners = emitter.listenerCount('connection')
console.log(eventListeners + ' 个监听器监听连接事件。')

emitter.emit('connection')

eventListeners = emitter.listenerCount('connection')
console.log(eventListeners + ' 个监听器监听连接事件。')

emitter.removeAllListeners()

eventListeners = emitter.listenerCount('connection')
console.log(eventListeners + ' 个监听器监听连接事件。')

emitter.emit('connection')

console.log('程序执行完毕')