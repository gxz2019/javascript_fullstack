let arr = [-1, 0, 1, 2, -1, -4]
let arr2 =[]
// let sum = arr[0]
function add(nums) {
  for(let i = 0;i < arr.length;i++) {
    // sum = a[i] + a[i+1]
    for(let j = i + 1;j < arr.length;j++) {
      sum = arr[i] + arr[j]
      let sum1 = -sum
      if(!arr.indexOf(sum1)){
        return
      }else{
        console.log(arr[i],arr[j],sum1,sum)
        console.log("aaaaaaaaaaa")
      }
    }
  }    
  // console.log(arr2)
}
add(arr2)