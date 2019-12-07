const debounce = (fn,delay) => {
  let timer = null
  return (...args) => {
  //  let timer = null
  clearTimeout(timer)
    setTimeout(() => {
      fn()
    },delay)
  }
}

test = function(e){
  console.log(123)
}
debounce(test(e),500)