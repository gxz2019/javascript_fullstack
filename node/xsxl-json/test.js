var xlsx2json = require("node-xlsx");

var list = xlsx2json.parse("./author.xlsx" );

var list1 = list[0].data
console.log(list1);