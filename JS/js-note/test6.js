

var arr = [10,20,1,2]
arr.sort((x,y) => {
  if(x > y) {
    return 5
  }else{
    return -1
  }
  return 0  
})
console.log(arr)