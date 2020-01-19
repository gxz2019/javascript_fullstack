//封装一个队列类
class Queue{
  constructor() {
    this.items = []
  }
  //向队列尾部添加一个或多个新的项
  enqueue(element) {
    this.items.push(element)
  }
  //移除队列的第一项，并返回被移除的元素
  dequeue() {
    return this.items.shift()
  }
  //返回队列的第一个元素
  front() {
    return this.items[0]
  }
  //队列是否为空
  isEmpty() {
    return this.items.length === 0
  }
  //队列的元素个数
  size() {
    return this.items.length
  }
  //将队列的内容转换为字符串
  toString() {
    let resultString = ''
    for(let i = 0;i < this.items.length;i++) {
      resultString += this.items[i] +' '
    }
    return resultString
  }
}
// var s = new Queue()
// s.enqueue(1)
// s.enqueue(2)
// s.enqueue(3)
// s.enqueue(4)
// s.enqueue(5)
// console.log(s)
// console.log(s.toString())
// console.log(typeof(s.toString()))



// 封装一个击鼓传花func
function a(name) {
  var s = new Queue()
  let n = 1
  for(let i = 0;i < arguments.length;i++) {
    // console.log(arguments[i])
    s.enqueue(arguments[i])
  }
  while(!s.size() === 1) {
    let item = s.front()
    console.log(item)
    if(n % 5 === 0) {
      s.dequeue()
    }else{
      s.dequeue()
      s.enqueue()
    }
    n++
  }
  return s.items
}

console.log(a(10,50,660,50))