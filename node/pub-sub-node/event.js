//
const Event = require('events');
const ev = new Event();
//订阅
ev.on('price', (a,b) => {
    console.log(a,b,'涨价了')
})
ev.on('price', (a,b) => {
    console.log(a,b,'dsad')
})
//发布
ev.emit('price','猪肉','大葱')