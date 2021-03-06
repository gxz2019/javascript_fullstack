//函数声明
// function test() {}

//函数表达式 
//1.命名表达式
// var test = function abc() {}
//2.匿名表达式
// var test = function () {}


//参数
// function add(a,b) {
//   if(a > b) {
//     return a - b
//   }else if(a < b){
//     return b - a
//   }else{
//     return 10
//   }
// }
// console.log(add(10,10))

//打印形参
// function printArgs(a) {
//   console.log(printArgs.length)
// }
// printArgs()

//任意个数求和
// function randomSum() {
//   var sum = 0
//   for(let i = 0;i < arguments.length;i++) {
//     sum += arguments[i]
//   }
//   return sum 
// } 
// console.log(randomSum(1,2,3,4,99))


//形参与arguments的映射规则
//1.第一种情况
// function test(a,b) {
  //test(1,2)调用函数，执行function test(
  //   var a = 1,b = 2;
  // )

  // var a = 3   则形参a的值从1变成了3
  // console.log(arguments[0],arguments[1])
  //  arguments[0] = 10  形参a由1变成了10
  //  console.log(a,b)
// }
// test(1,2)

//2.第二种情况
// function test(a,b) {
//   //var a = 1;   没有声明b
//   var b = 100
//   console.log(b)  //100
//   console.log(arguments[1])   //undefined
//   //因为形参b没有传进实参,所以对于b的改变,形参与arguments并没有映射规则
// } 
// test(1)


//return 

// function test() {
//   return 123
// }
// console.log(test())

//练习
//1.
function scream(animal) {
  switch (animal) {
    case 'dog':
      console.log('汪汪汪!')
      break;
    case 'cat':
      console.log('喵喵喵!')
      break
    case 'duck':
      console.log('嘎嘎嘎!')
      break
  }
}
scream('dog')

//2.

function reserve(str) {
  var str1 =''
  for(let i = str.length -1;i >= 0;i--) {
    str1 += transfer(str[i])
  }
  console.log(str1) 
}
reserve('123')
function transfer(str) {
  switch (str) {
    case '1':
      return '一';
    case '2':
      return '二';
    case '3':
      return '三';
  }
}

//3.阶层
function stratum(num) {
  if(num == 1){
    return 1
  }else{
    return num * stratum(num -1)
  }
}
console.log(stratum(10))

//4.斐波那契数列
//①
function fbnq(a,b,n) {
  var nums = [a,b]
  var i= 2
  while(i < n) {

    nums[i] = nums[i -1] + nums[i -2]
    i++
  } 
  return nums
}
console.log(fbnq(1,1,50))
//②递归
function result(n){
  if(n==1||n==2){
      return 1
  };
  return result(n-2)+result(n-1);
}


