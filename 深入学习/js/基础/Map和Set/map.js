//  初始化Map需要一个二维数组
// var  m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]])
// let n = m.get('Bob')
// console.log(n)

//或者直接初始化一个空的Map，  Map的方法，，，set get has delete  
var m = new Map()
m.set('gxz',90)//添加新的key-value
m.set('bob',80)
m.has('gxz')//查看是否存在key为gxz  
m.get('gxz')  //获取key为gxz的value值
// m.delete('gxz')  //删除
m.get('gxz')   //undefined
console.log(m)



