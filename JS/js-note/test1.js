// // var arr = [1,2,3,4]
// // // arr.map(String)
// // console.log(arr.map(String))
//  var nums = [1,2,3,4];
// //  var sum =1
// var a = function(arr) {
//    return arr.reduce(function(x,y){
//     // return x * y
//     if(arr.indexOf(0) === -1) {
//       return x * y
//     }else{
//       return 0
//     }
//   })
  
// }
// console.log(a(nums))
// var nums = [1,2,3,4,5]
// function a(arr) {
//   return arr.reduce(b)
// }
// function b(x,y) {
//   return x * y
// }
// console.log(a(nums))
// var nums = [1,2,3,4,5]
// function a(arr) {
//   return arr.map(b)
// }
// function b(x) {
//   return x * x
// }
// console.log(a(nums))
 


//把[1,3,5,7,9] 切换成整数13579
// var nums = [1,3,5,7,9]
// function a(arr) { 
//    return arr.reduce(b)
// }
// function b(x,y) {
//   return 10 * x + y
// }
// console.log(a(nums))



//  string -> int
// let arr = [],arr1
// function string2int(s) {
//   for(let i = 0 ; i < s.length ; i++) {
//     arr.push(s[i])
//   }
//   // console.log(arr)
//    return (arr.map(b)).reduce(c)
//   //  return arr1.reduce(c)
// }
// function b(x) {
//   return x * 1
// }
// function c(x,y){
//   return 10 * x + y
// }
// console.log(string2int('123456'))


// 请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。
// 输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
var arr = ['adam', 'LISA', 'barT']
function a(nums) {
  // (nums.map(b)).map(c)
 return  nums.map(b)
} 

function b(x) {
  var strs = "";
  strs += x[0].toUpperCase();
  for(let i = 1; i< x.length;i++){
    strs += x[i].toLowerCase();
  }
return strs;
}
console.log(a(arr))