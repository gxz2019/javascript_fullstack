//封装一个队列类
class Queue{
  constructor() {
    this.items = []
  }
  //向队列尾部添加一个或多个新的项
  enqueue(element) {
    this.items.push(element)
  }
  //删除
}
var s = new Queue()
s.enqueue(10)
console.log(s)