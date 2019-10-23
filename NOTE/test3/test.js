function sum(arr){
    return arr.reduce(function (x,y){
        return x+y;
    })
}
console.log(sum([1,2,3,4,5]));