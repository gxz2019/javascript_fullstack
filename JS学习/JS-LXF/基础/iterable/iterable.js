// 遍历Array可以用下标循环。遍历Map和Set就无法使用下标。为了统一集合类型，
// ES6标准引入了新的iterable类型，Array，Map，Set都属于iterable类型

//具有iterable类型的集合可以通过新的for...of循环来遍历

var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for(let i of a){
  console.log(i)
}
for(let x of s) {
  console.log(x)
}
for(let y of m) {
  console.log(y)
}

//for...of  and  for...in
var b = ['A', 'B', 'C'];
b.name = 'dasd'
// console.log(b)
for(let aa in b) {
  console.log(aa)
}


