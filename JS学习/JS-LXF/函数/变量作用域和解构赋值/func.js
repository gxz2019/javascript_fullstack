// function foo() {
//   var x = 1;
//   function bar() {
//       var x = 'A';
//       console.log('x in bar() = ' + x); // 'A'
//   }
//   console.log('x in foo() = ' + x); // 1
//   bar();
// }

// foo();

//变量提升
//请严格遵守在函数内部首先声明所有变量
// function foo() {
//   var x = 'Hello, ' + y;
//   console.log(x);   //Hello,undefined
//   var y = 'Bob';
// }

// foo();


//全局作用域 JS有一个默认的全局对象window，全局作用域的变量实际上被绑定到window的
// 一个属性
// var course = 'Learn JavaScript';
// alert(course); // 'Learn JavaScript'
// alert(window.course); // 'Learn JavaScript'
//实际上我们每次调用alert()函数其实也是window的一个变量
window.alert()  === alert()

//这说明JavaScript实际上只有一个全局作用域。任何变量（函数也视为变量），
// 如果没有在当前函数作用域中找到，就会继续往上查找，最后如果在全局作用域中
// 也没有找到，则报ReferenceError错误。


//名字空间
// 全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，
// 或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
// 减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：
// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};


//局部作用域

// 由于JavaScript的变量作用域实际上是函数内部，
// 我们在for循环等语句块中是无法定义具有局部作用域的变量的：比如
function foo() {
  for (var i=0; i<100; i++) {
      //
  }
  i += 100; // 仍然可以引用变量i
}
//为了解决块级作用域，ES6引入了新的关键字let，
// 用let替代var可以申明一个块级作用域的变量：
function foo() {
  var sum = 0;
  for (let i=0; i<100; i++) {
      sum += i;
  }
  // SyntaxError:
  i += 1;
}

//ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域：



//解构赋值
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']]
let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素

var person = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school'
};
var {name, age, passport} = person;

var person = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school',
  address: {
      city: 'Beijing',
      street: 'No.1 Road',
      zipcode: '100001'
  }
};
var {name, address: {city, zip}} = person;
name; // '小明'
city; // 'Beijing'
zip; // undefined, 因为属性名是zipcode而不是zip
// 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
address; // Uncaught ReferenceError: address is not defined


//解构赋值使用场景
// 交换两个变量x和y的值，可以这么写，不再需要临时变量：
var x = 1,y = 2;
[x,y] = [y,x]

//快速获取当前页面的域名和路径
var {hostname:domain,pathname:path} = location

//如果一个函数接收一个对象作为参数，那么，可以使用解构直接把对象的属性绑定到变量中
// 例如，下面的函数可以快速创建一个Date对象：
function buildDate({year,month,day,hour = 0,minute = 0,second=0}) {
  return new Date()
}
//它的方便之处在于传入的对象只需要year、month和day这三个属性
buildDate({ year: 2017, month: 1, day: 1 });
// Sun Jan 01 2017 00:00:00 GMT+0800 (CST)
//也可以传入hour、minute和second属性：
buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 });
// Sun Jan 01 2017 20:15:00 GMT+0800 (CST)
