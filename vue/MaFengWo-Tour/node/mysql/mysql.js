//获取基础配置

const Conf = require('./config')

var knex = require('knex')({
  client:'mysql',
  connection:{   //连接池
    host:Conf.mysql.host,
    port:Conf.mysql.port,
    user:Conf.mysql.user,
    password:Conf.mysql.pass,
    database:Conf.mysql.db
  }
})


module.exports = knex