var jsonSql = require('json-sql')()
var citylist = require('./dasdas')
var sq1 = jsonSql.build({
  type:'insert',
  table:'mfw_index_strategy',
  values:citylist
})
sq1.query
sq1.values

console.log(sq1)

