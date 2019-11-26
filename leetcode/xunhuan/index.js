///循环移位算法


// var list = [-1,-100,3,99],k = 2;
// function RShift (k,list) {
//   const copy = [...list];
//   const n = list.length;
//   for(let i = 0; i < n ;i++) {
//     list[i] = copy[(k + i) % n]
//   }
//   return list
// }
// console.log(RShift(k,list))

//三次翻转法
// [0,n-k-1]
//[n-k,n-1]
//[0,n-1]
function raverse(list,start,end) {
  let t = null;
  while(start < end) {
    t = list[start];
    list[start] = list[end];
    list[end] = t;
    start++;
    end--
  }
}

function RShift(list,k) {
  let n = list.length;
  if(k % n ===0){
    return  
  } 
  raverse(list,0,n-k-1);
  raverse(list,n-k,n-1);
  raverse(list,0,n-1)
}
console.log(RShift([1,2,3,4,5,6,7],5))
