//方法
//在一个对象中绑定函数叫做这个对象的方法
// var xiaoming = {
//   name: '小明',
//   birth: 1990,
//   age: function () {
//       var y = new Date().getFullYear();
//       return y - this.birth;   //
//   }
// };
// xiaoming.age; // function xiaoming.age()
// xiaoming.age(); // 今年调w用是25,明年调用就变成26了

//绑定到对象上的函数称为方法，和普通函数也没啥区别，
// 但是它在内部使用了一个this关键字

//在一个方法内部，this是一个特殊变量，
// 它始终指向当前对象，也就是xiaoming这个变量。
// 所以，this.birth可以拿到xiaoming的birth属性。
// 让我们拆开写：
function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}

var xiaoming = {
  name: '小明',
  birth: 1990,
  age: getAge
};

console.log(xiaoming.age()); // 25, 正常结果
console.log(getAge()); // NaN  因为这时候的this指向window