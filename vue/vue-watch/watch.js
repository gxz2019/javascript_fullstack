class watcher {
  constructor (opts) {
    this.$data = opts.data
    this.$watch = opts.watch
    for(let key in opts.data) {
      this.setData(key,opts.data[key])
    }
  }
  setData(_key,_val) {
    Object.defineProperty(this,_key,{//Object.defineProperty(this) ,this指向上下文
      get:function () {
        return this.$data[_key]
      },
      set:function (val) {
        const oldVal = this.$data[_key]
        if (oldVal === val) {
          return val
        }
        this.$data[_key] = val
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && (this.$watch[_key].call(this,val,oldVal))
        return val 
      }
    })    
  }
}
let vm = new watcher({
  data:{
    // inner:''
    a:0,
    b:'hello'
  },
  watch:{
    a(newVal,oldVal) {
      // document.getElementById('app').innerHTML = newVal
      console.log(oldVal,newVal)
    }
  }
})

setTimeout(() => {
  vm.a = 1
},1000)

