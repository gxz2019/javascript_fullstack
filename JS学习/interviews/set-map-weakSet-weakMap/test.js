// var array = [2,3,4,5,6,4,3,2]
// // var a = new Set()
// // array.forEach(x => {
// //   a.add(x)
// // })
// // console.log(a)
// // const items = new Set([1,2,3,4,5,5,5,5,5])
// // console.log(items.size)
// var a = [...new Set(array)]
// console.log(a)
var addToArrayForm = function(A, K) {
  var b = A.reduce((x,y) => {
      return  10 * x + y
  })
  var c = b + K;
  var array = c.toString().split("");
  return array
};
console.log(addToArrayForm([1,2,1],12))