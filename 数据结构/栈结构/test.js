// 栈结构的实现

// 1.基于数组实现
function Stack() {  //写一个栈类
  //栈中的属性
  this.items = []
  //栈的相关操作  push/pop.................
  //1.将元素压入栈
  Stack.prototype.push = function (element) {
    this.items.push(element)
  }
  //2.从栈中取出元素  数组的pop方法：删除或返回数组的最后一个元素
  Stack.prototype.pop = function() {
    return this.items.pop()
  }
  // 3.查看一下栈顶元素
  Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
  }
  // 4.判断栈是否为空
  Stack.prototype.isEmpty = function() {
    return this.items.length === 0
  }
  // 5.获取栈中元素的个数
  Stack.prototype.size = function() {
    return this.items.length
  }
  // 6.toString方法
  Stack.prototype.toString = function() {
    var resultString = ''
    for(let i = 0;i < this.items.length;i++) {
      resultString += this.items[i] + ''
    } 
    return resultString
  }
}

var s = new Stack()  //创建一个栈类的实例
// s.push(1)  //入栈
// s.push(2)
// s.push(3)
// s.push(4)
// console.log(s )

// s.pop()  //出栈
// console.log(s )
// s.peek()
// console.log(s.peek())
// // s.isEmpty()
// console.log(s.isEmpty())

// console.log(s.size())

// console.log(s.toString())
function dec2bin(decNumber) {  //封装一个func 将十进制转换为二进制
  var stack = new Stack()  //创建一个栈类的实例用来存储二进制的数字
  while(decNumber > 0) { 
    stack.push(decNumber % 2)   //余数（模）
    decNumber = Math.floor(decNumber/2)  
  }
  var resultDec2bin = ''
  while(!stack.isEmpty()) {
    resultDec2bin += stack.pop()
  }
  return resultDec2bin
}
console.log(dec2bin(100))


