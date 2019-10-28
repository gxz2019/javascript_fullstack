// let x = {
//     num:1,
//     sum:function(data){
//         return this.num + data//this是指运行了sum函数的X
        
//     }
// }
let y = {
    num :1,
    sum : function(data){
        return this.num + data
    }
}
let y_sum = y.sum
    // console.log(x.sum(1))
    console.log(this)
    console.log(y_sum(1))
// let y_summ = function(data){
//     data = 1
//     return this.data
// }
// // console.log(y_sum)
// console.log(this.data)