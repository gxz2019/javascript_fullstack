////JSON


var xiaoming = {
  name: '小明',
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  'middle-school': '\"W3C\" Middle School',
  skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
// var s = JSON.stringify(xiaoming,null,' ');
// console.log(s)
function convert(key,value) {
  if(typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
}
// var s = JSON.stringify(xiaoming,convert,' ')
console.log(JSON.stringify(xiaoming,convert,' ')


)