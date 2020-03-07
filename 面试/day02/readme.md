## ES6知识点及常考面试题

1. var let const的区别
   什么是提升？什么是暂时性死区？var、let 及 const 区别？
   var存在提升，let const不存在，在全局let和const不会把变量绑定在window上
   
   1. 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
   2. var 存在提升，我们能在声明之前使用。let、const 因为暂时性死区的原因，不能在声明前使用
   3. var 在全局作用域下声明变量会导致变量挂载在 window 上，其他两者不会
   4. let 和 const 作用基本一致，但是后者声明的变量不能再次赋值
   
2. 原型继承和Class继承
   原型如何实现继承？Class 如何实现继承？Class 本质是什么？
   1. 组合继承
   2. 寄生组合继承
   3. class继承

3. 模块化
  为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？ 
  1. 解决命名冲突
  2. 提供复用性
  3. 提高代码可维护性

  1. 立即执行函数
  在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题。
  2. AMD和CMD
  3. CommonJS
  module.exports   exports  require ...............
  require:  例子：var a = require('./wenjian)  本质上是执行了一个立即执行函数
  exports 和 module.exports其实代表着同一个地址
  当用exports时候 需要exports.a = ...   所有一般用moudle.exports

4. Proxy
   涉及面试题：Proxy 可以实现什么功能？
  如果你平时有关注 Vue 的进展的话，可能已经知道了在 Vue3.0 中将会通过 Proxy 来替换原本的 Object.defineProperty 来实现数据响应式。 Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。

5. map,filter,reduce
   