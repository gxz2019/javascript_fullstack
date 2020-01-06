var startTime = (new Date()).getTime(); //开始时间
var db = connect('log')
var tempArray = [];
for(let i=0;i<1000;i++) {
  tempArray.push({num:1});
}
db.test.insert(tempArray)
// for(let i = 0;i < 1000;i++) {
//   db.test.insert({num:1});
// }

var runTime = (new Date()).getTime() - startTime //运行时间
print(runTime+'ms')