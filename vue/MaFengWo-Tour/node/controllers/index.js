const knex= require('../mysql/mysql')

module.exports = async (ctx)  => {
  const banner = await knex('mfw_index_banner').select()
  ctx.body = {
    'banner' : banner
  }
} 
