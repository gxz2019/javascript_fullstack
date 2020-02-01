var s = new Set([1,2,3])
console.log(s)
//重复元素在set中会自动过滤
var s1 = new Set([1,1,2,3,4])
console.log(s1)  //Set { 1, 2, 3, 4 }  返回的不是数组，是Set数据类型

//有关Set的方法  add  delete
s.add(1)
s.delete(1)


//可用于数组去重
var arr = [1,1,2,3,4]
var s = new Set(arr)
var arr1 = Array.from(s)
console.log(arr1)