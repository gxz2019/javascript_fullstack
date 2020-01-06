var workmate1 = {
  name:'jspang',
  age:33,
  sex:1,
  skill:{
    "one":"html",
    "two":"css",
    "three":"ts"
  }
}
var workmate2 = {
  name:'jspang1',
  age:32,
  sex:1,
  skill:{
    "one":"html",
    "two":"css",
    "three":"ts"
  }
}
var workmate3 = {
  name:'jspang2',
  age:31,
  sex:1,
  skill:{
    "one":"html",
    "two":"css",
    "three":"ts"
  }
}
var db = connect('company');
var workmateArray1 = [workmate1,workmate2,workmate3]
db.workmate1.insert(workmateArray1)
print('insert is successed')