var arr = [1,2,3,4]

//indexOf  索引
arr.indexOf(1)    // 2
/************************* */


//slice  截取Array的部分元素
let arr1 = arr.slice(0,3)  //包括索引0，不包括3
console.log(arr1)    // [1,2,3]
arr2 = arr.slice()    //将arr复制给arr2
/***************************** */


//push和pop
// push向元素最后添加元素
// pop删除最后一项元素
arr.push(10)   //arr = [1,2,3,4,10]
arr.pop()    //arr = [1,2,3]

/************** */

// unshift 和shift
// unshift方法向数组头部添置元素
// shift方法删除数组头部元素

arr.unshift(1)       // arr = [1,1,2,3,4]
arr.shift()        //arr = [2,3,4]

/*********************** */


// sort可以对数组进行排序

/**************** */

//reverse反转数组
arr.reverse()    //arr = [4,3,2,1]

/***************** */

// splice方法，可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素


//contact方法,把当前的Array和另一个Array连接起来，并返回一个新的Array


//join方法，它把当前Array 的每个元素都用指定的字符串连接起来，然受返回连接后的字符串

