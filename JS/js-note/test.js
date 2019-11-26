function a(callback) {
  callback()
  console.log('我是主函数')
  
}
function b(c) {
  setTimeout(() => {
    console.log('我是回调函数')

  },1000)
  c()
  // console.log('我是回调函数')
}
function c(){
  setTimeout(() => {
    console.log('我是第二个回调')
  },3000)
}
a(b(c))