const events = require('events')

const eventEmitter = new events.EventEmitter()

eventEmitter.on('some_event', () => console.log('some_event 事件触发'))

eventEmitter.on('some_event1', (arg1, arg2) => console.log('监听器1', arg1, arg2))

eventEmitter.on('some_event2', (arg1, arg2) => console.log('监听器2', arg1, arg2))

setTimeout(() => eventEmitter.emit('some_event'), 3000)

eventEmitter.emit('some_event1', '监听器1的参数1', '监听器1的参数2')

setInterval(() => eventEmitter.emit('some_event'), 5000)

eventEmitter.emit('some_event2', '监听器2的参数1', '监听器2的参数2')