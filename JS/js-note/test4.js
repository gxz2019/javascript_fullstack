

function lazy_sum(arr) {
  var sum = function () {
      return arr.reduce(function (x, y) {
          return x + y;
      });
  }
  return sum;
}
// console.log(lazy_sum([1,2,3,4,5]))
f = lazy_sum([1,2,3,4,5])
f()
console.log(f())