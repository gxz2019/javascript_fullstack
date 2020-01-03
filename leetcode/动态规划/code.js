let arr = [13,1,2,5,3,8,11]
let sum = 18

// function findSum(arr,sum) {
//   for(let i = 0;i < arr.length;i++) {
//     for(let j = i + 1;j < arr.length;j++) {
//       if(arr[i] + arr[j] === sum) {
//         return i,j
//       }
//     }
//   }
// }
// console.log(findSum(arr,sum))

// function findSum(arr,sum) {
//   for(let i = 0;i < arr.length;i++) {
//     let obj = {}
//     v = sum-arr[i];
//     obj[i] = v;
//     if(arr.indexOf(v)) {
//       return obj
//     } 
//   }
// }
// console.log(findSum(arr,sum))