// let notSure:any = 4  //  "4"
// notSure = 'wn'

// let value:any
// value = true
// value = 1
// value = 'ds'
// value = Symbol
// value = {}
// value = []

// let val:unknown
// val = true
// val = 1
// val ='ee'
// val = Symbol
// val = {}
// val = []
// //
// val.foo.bar
// val()
// new val()
// val[0][1]
let test:string = "hello"
function error(message:string):never {
  throw new Error(message)
}
const empty:never[] = []
// empty.push(1)

//Array
const list:Number[] = [1,2,3,4]
const list2:Array<number> = [1,2,3,4]   //泛型
const list3:Array<string | number> {
  
} 

//Tuple 元组
let x:[string,number]
x = ['dasa',1]
x = ['hello',2]
interface Tuple extends Array<string | number> {
  0:string
  1:number,
  length:2
}


//object
enum Direction {
  center = 1
}
let value:object
value = Direction
value = [1]
value = [1,'hello']