//手写发布订阅
const Events = require('events');
const ev = new Events();

//订阅
ev.on('price',() => {
    console.log('123');
})
ev.on('price',() => {
    console.log('1234');
})

//发布
ev.emit('price');