// {12,23,123,53,67,34,21,89}
// 1.选择一个元素作为基准，53
// 2.所有小于基准的元素,都移到基准的左边,所有大于的都移到右边
// 3.对基准左右两边的子集重复1,2
var a = function(arr) {
  if(arr.length <= 1) {
    return 
  }
  let l = arr.length
  let  k = Math.floor(l / 2)
  var piovt = arr.splice(k,1)[0]
  var left = []
  var right = []
  for( i = 0 ; i < arr.length;i++){
    if(a[i] < a[k]) {
      left.push(a[i])
    }else{
      right.push(a[i])
    }
  }
  return a(left).concat([piovt],a(right))
  // a(left)
  // a(right)     
}
console.log(a([12,23,123,53,67,34,21,89]))
