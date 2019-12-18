// const wm = new WeakMap()
// const key = { foo : 1 }
// wm.set(key,2)
// console.log(wm.get(key))

// const k1 = [1,2,3]
// const k2 = [4,5,6]
// const wm2 = new WeakMap([[k1,'foo'],[k2,'bar']])
// console.log(wm2.get(k2))

const map = new WeakMap()
map.set(null,2)
console.log(map.get(null))//// weakMap 只接受对象作为键名,不接受其他数据类型的值(null也不行)
