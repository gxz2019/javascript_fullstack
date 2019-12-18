// const map = new Map()
// map.set('abc',123).set(22,'abc').set(undefined,NaN)
// console.log(map.get(123))
// console.log(map.has(123))
// map.delete(22)
// console.log(map)


//遍历
//Map 数据结构的遍历顺序一定会按照 数本省的顺序进行
// const map = new Map([['foo','no'],['bar','yes']])
// // console.log(key())
// for (let key of map.keys()) {      //valuses()   //entrirs()
//   console.log(key)
// }
// //将Map转换为数组
// const map = new Map([
//   [1,'one'],
//   [2,'two'],
//   [3,'three']
// ])
// [...map.keys()]



// map.forEach((key,value,map) => {
//   console.log(key + ':' +value,map)
// })
// Array.from(map).map(() => {

// })

//类型转换

//Map => 对象
// function setMap(map1) {
//   let obj = Object.create(null)
//   for(let [i,j] of map1 ) {
//     obj[i] = j
//   }
//   return obj
// }
// const myMap = new Map()



//对象转成Map
let obj = {
  'yes':true,
  'no':false
}
var map1 = new Map()
function a(obj) {
  let array
  for(let [key,value] of obj) {
    array.push([key,value])
  }
  return array
}