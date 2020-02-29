const knex= require('../mysql/mysql')

module.exports = async (ctx)  => {
  const size = 8;
  var page=1;
  const banner = await knex('mfw_index_banner').select()
  const strategy = await knex('mfw_index_strategy').select()
  const hotCities = await knex('mfw_index_hotcities').select()
  const cities = await knex('mfw_index_cities').select()
  ctx.body = {
    'banner' : banner,
    'strategy':strategy,
    'hotCities':hotCities,
    'cities':cities
  }
} 
