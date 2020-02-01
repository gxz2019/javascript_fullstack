var xiaohong = {
  name: '小红',
  'middle-school': 'No.1 Middle School'
};
//访问属性
console.log(xiaohong.name)
console.log(xiaohong['middle-school'])

console.log(xiaohong.sex)   //undefined

//新增属性
xiaohong.age = 18

//删除属性
delete xiaohong.age

//检查是否拥有属性
'name' in xiaohong    //true
//注意，xiaohong继承得到的属性也为true
//比如：
'toString'  in xiaohong //true
//因为toString定义在Object对象中，而所有对象最终都会在原型链上指向object，所以
// xiaohong也拥有toString







