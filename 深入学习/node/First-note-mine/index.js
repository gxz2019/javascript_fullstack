// // var s = 'hello'
// // function test(name) {
// //   console.log(s + ' ' + name)
// // }

// // module.exports = test

// //CommonJS规范

// // module.exports如何实现的?

// //准备一个module对象
// var module = {
//   id:'hello',
//   exports:{}
// };
// var load = function (module) {   //加载函数
//   //读取index.js的内容
//   function test (name) {
//     console.log('hello,' + name + '!')
//   }
//   module.exports = test;
//   //index.js的代码结束
//   return module.exports;   //利用了闭包
// } 
// var exported = load(module);   // == module.exports == test()
// //保存module
// save(module,exported)

// //我们在index.js中可以直接使用变量module原因就在于它实际上是函数的一个参数：


// //node的加载机制,
// var b = {}
// var a = {
//   b:{}
// }
// a.b = function () {
//   return 1
// }
// b.c = function() {
//   return 2
// }

// // console.log(a.b)
// console.log(b)
var b = {}
b = function test() {

}
console.log(b)
// var a = {
//   b:{}
// }
// a.b = function test() {
  
// }
// console.log(a.b)



