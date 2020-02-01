//arguments关键字。。保存函数的参数

function foo(x) {
  console.log('x = ' + x); // 10
  for (var i=0; i<arguments.length; i++) {
      console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
  }
}
foo(10, 20, 30);