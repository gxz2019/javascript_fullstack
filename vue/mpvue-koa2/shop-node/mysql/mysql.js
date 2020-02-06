//获取基础配置

const configs = require('./config')

var knex = require('knex') ({  
   client:'mysql',
   connection:{   //连接池
     host:configs.mysql.host,
     port:configs.mysql.port,
     user:configs.mysql.user,
     password:configs.mysql.pass,
     database:configs.mysql.db
   }
})

//将基础配置和sdk.config合并
module.exports = { mysql:knex}