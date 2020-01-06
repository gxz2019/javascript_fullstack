var db = connect('company')
// var workmate3 = {
//   name:'jspang2',
//   age:31,
//   sex:0
// }
// db.workmate.update({name:'jspang2'},workmate3)
db.workmate.update({name:'jspang2'},{"$set" :{age:40,sex:10}})



print('successed')