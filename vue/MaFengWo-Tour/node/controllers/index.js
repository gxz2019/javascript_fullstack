const knex= require('../mysql/mysql')

module.exports = async (ctx)  => {
  const size = 8;
  var page=1;
  const banner = await knex('mfw_index_banner').select()
  const strategy = await knex('mfw_index_strategy').select()
  ctx.body = {
    'banner' : banner,
    'strategy':strategy
  }
} 
