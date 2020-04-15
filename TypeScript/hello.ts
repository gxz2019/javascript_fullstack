// var a:string = 'hello World'
// console.log(a)
// var a = 1;
// console.log(a);
//ts有10中数据类型：
//undefined，number，string，boolean，null，
//enum ———— 枚举类型
//any ————任意类型
//void ————空类型
//Array ————数组类型
//Tuple ————元组类型

// enmu 枚举
// enum Ren{
//   man="nanren",
//   woman="nvren"
// }
// console.log(Ren.man)

//function
// function search(age:number):string{
//   return "search"+age+'aa'
// }
// console.log(search(18))

//有可选参数的函数
// function search(age:number,size?:string):string{
//   let yy:string = ''
//   yy = '找到了'+age+'岁'
//   if(size){
//     yy = yy+size
//   }
//   return yy+'的小姐姐'
// }
// console.log(search(18))

//有默认参数的函数
// function search(age:number=18,size:string='36D'):string{
//   return age+size
// }
// console.log(search(undefined,'aa'))

//有剩余参数的函数
// function search(...xuqiu:string[]):string{
//   var yy = ''
//   for(let i = 0;i < xuqiu.length;i++) {
//     yy+=xuqiu[i]
//  }
//  return yy
// }
// console.log(search('22岁','大长腿','瓜子脸','水蛇腰'))

// 数组
// let arr1:number[] = [1,2,3,4]
// let arr2:Array<string> = ['a','b','c']
// let i = 1;
// arr1.push(1)
// console.log(arr1) 

//面向对象编程
// class Car{
//   name:string;
//   age:number
//   constructor(name:string,age:number){
//     this.name = name;
//     this.age = age;
//   }
//   run() {
//     console.log('run~')
//   }
// }
// console.log(new Car('BMW',18))
// new Car('BMW',18).run()

//修饰符public protected,private
// class Girl {
//   public sex:string;
//   protected name:string;
//   private age:number;
//   public constructor(sex:string,name:string,age:number){
//     this.sex = sex;
//     this.name = name;
//     this.age = age;
//   }
//   public sayHello():void {
//     console.log('你好')
//   }
//   protected sayLove():void {
//     console.log('爱你')
//   }
// }
// let g:Girl = new Girl('女','aaa',18)
// console.log(g)
// g.sayHello()

// var i:[string,number] = ['a',1] //元组

//只读修饰符readonly
// class Man{
//   public readonly sex:string;
//   constructor(sex:string){
//     this.sex = 'nanren'
//   }
// }

//类的继承和重写
// class Parent{
//   public name:string;
//   public age:number;
//   constructor(name:string,age:number) {
//     this.name = name;
//     this.age = age;
//   }
//   public insterst() {
//     console.log('泡妞')
//   }
// }
// var p:Parent = new Parent('gxz',18)
// // console.log(p.name)
// // p.insterst()
// class 
interface Husband {
  sex:string
  interest:string
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务'}
console.log(myhusband)