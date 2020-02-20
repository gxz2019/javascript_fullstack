// 从1加到100
// function add() {
//   let sum = 0
//   for(let i = 1;i < 101;i++) {
//     sum = sum + i
//   }
//   return sum
// }
// console.log(add())

//遍历数组
// function each(nums) {
//   nums.forEach(element => {
//     console.log(element)
//   });
// }
// each([1,2,3])

// //用for...in 遍历对象
// var o = {
//   name: 'Jack',
//   age: 20,
//   city: 'Beijing'
// }
// for(var key in o) {
//   console.log(key)
// }

// //用for...in 遍历数组   注意  用for...in 得到的是string不是number
// var arr = [1,2,3]
// for(var i in arr) {
//   console.log(i)   //0,1,2
//   console.log(arr[i])  //1,2,3
// }

// //用while实现从1加到100
// let n = 0
// let sum1 = 0;
// while(n <= 100) {
//   sum1 = sum1 + n
//   n++
// }
// console.log(sum1)

//用do...while...循环  与while不同的是，他是在循环完成后判断条件

var n = 0;
do{
  n = n + 1
}while(n<50){
  console.log(n)
}





