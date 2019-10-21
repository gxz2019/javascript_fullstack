// var xiaoming = {
//     name: 'xiaoming',
//     birth :'1990',
//     age:function(){
//         var y = new Date().getFullYear();
//         return y - this.birth;//this指向当前变量，也就是xiaoming,
//         //this.birth就是xiaoming.birth
        
//     }
// }
function getAge(){
    var y = new Date().getFullYear();
    return y-this.birth;
}
var xiaoming = {
    name:'xiaoming',
    birth:1990,
    age:getAge
};
console.log(xiaoming.age());
console.log(getAge());