//语法分析   预编译  解释执行
///函数声明整体提升
//变量 声明提升

//预编译四部曲  预编译发生在函数执行的前一刻
//1.创建AO对象
// AO{

// }
//2.将参数名和变量名当作AO对象的属性名，值为undefined

//3.将实参值和形参统一

//4.在函数体内找函数声明，值赋予函数体
// GO{
//   // demo:function demo(){};
//   a:10;
//   f:123
// }
// AO{
//   e:2
//   b:123;
//   c:function c() {};
//   a:undefined
// }
