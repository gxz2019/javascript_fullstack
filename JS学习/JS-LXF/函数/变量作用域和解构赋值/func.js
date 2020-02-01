function a() {
  console.log(123)
  var a = 5;
  for(let i = 0;i < arguments.length;i++) {
    console.log(arguments.length)
  }
}
a(1,2,3,4,5,6)