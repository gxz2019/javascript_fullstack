// // // // // function foo(num) {
// // // // //     console.log("foo:" + num);
// // // // //     console.log(foo.count++);
// // // // // }
// // // // // foo.count = 0;
// // // // // var i;
// // // // // for ( i = 0 ; i < 10 ; i++) {
// // // // //     if(i > 5){
// // // // //         foo(i);
// // // // //     }
// // // // // }
// // // // // console.log(foo.count);
// // // // function add(x,y,f){
// // // //     return f(x) + f(y);
// // // // }
// // // // console.log(add(-5,6,Math.abs));
// // // function pow(x) {
// // //     return x * x;
// // // }
// // // var arr = [1,2,3,4];
// // // var result = arr.map(pow);
// // // console.log(result);
// // var arr = [1,2,3];
// // var x = arr.map(String);
// // console.log(x)
// var arr = [1,2,3,4];
// var z = arr.reduce(function (x,y){
//     return x+y;
// })
// // console.log(z)
// var arr = [1,2,3,4]
// var z = arr.reduce(function(x,y){
//     return x * y
// })
// console.log(z);
var arr = [1,3,5,7,9]
var z = arr.reduce(function(x,y){
    return x * 10 + y;
})
console.log(z)
arr1.reduce(function(x,y){
    
})
