var jsonSql = require('json-sql')()
var sq1 = jsonSql.build({
  type:'insert',
  table:'users',
  values:{
		"id": 1,
		"ad_position_id": 1,
		"media_type": 1,
		"name": "合作 谁是你的菜",
		"link": "",
		"image_url": "https://yanxuan.nosdn.127.net/31da695c84cabd0eaff054265da29e5c.jpg?imageView&quality=75&thumbnail=750x0",
		"content": "合作 谁是你的菜",
		"end_time": 0,
		"enabled": 1
	}
})
sq1.query
sq1.values

console.log(sq1)