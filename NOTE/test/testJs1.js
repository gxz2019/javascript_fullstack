// // // // // // function foo(){
// // // // // //     var x = 1
// // // // // //     console.log(x)
// // // // // //     function bar(){
// // // // // //         var y = x + 1
// // // // // //     }
// // // // // //     var z = y + 1
// // // // // // }
// // // // // // function foo(){
// // // // // //     var x = 1;
// // // // // //     function bar(){
// // // // // //         var x = 'A';
// // // // // //         console.log('x in bar() = ' + x);
// // // // // //     }
// // // // // //     console.log('x in foo() = ' + x);
// // // // // //     bar();
// // // // // // }
// // // // // // foo();

// // // // // function foo(){
// // // // //     var x = `Hello,` + y;
// // // // //     console.log(x);
// // // // //     var y = `Bob`;
// // // // // }
// // // // // foo();
// // // // // // ||
// // // // var course = `Learn JavaScript`;
// // // // console.log(course);
// // // // console.log(window.course);
// // // function foo(){
// // //     console.log(`foo`);
// // // }

// // // foo();
// // // // window.foo();
// // // var array = ['hello' , 'javaScript' , 'ES6']
// // // var x = array[0];
// // // var y = array[1];
// // // var z = array[2];
// // // console.log(x)
// // // // console.log(y)
// // // // console.log(z)
// // // var [x,y,z] = ['a','b','c']
// // // console.log(x+y+z)
// // var person = {
// //     name : '小明',
// //     age : '20',
// //     gender : 'male',
// //     passport : 'G-12345678',
// //     school : 'N0.4SCHOOL'
// // };
// // var {name,age,passport} = person;
// // console.log(name,age,passport)
// var person = {
//     name : 'xiaom',
//     age : 20,
//     address:{
//         city : 'beijing',
//         street : 'No.1school',
//         zipcode :'1001'
//     }
// }
// var {name,age,address:{city,street}} = person
// console.log(name,age)
// // var x = 1 ,y =2;
// // [x,y]=[y,x];
// // console.log(x,y) 
// function buildDate({year,month,day,hour=0,minute=0,
// second=0}){
//     return new Date(year,month,day,hour,minute,
//         second)
// }
// console.log(buildDate({year:2017,month:12,day:1}))

