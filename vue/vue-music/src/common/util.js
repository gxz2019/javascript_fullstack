
//节流
export function debounce (func,delay) {
  let timer
    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      let timer = setTimeout(() => {
        func.apply(this,args)
      },delay)
    }
}