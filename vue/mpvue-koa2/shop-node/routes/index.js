const Router = require('koa-router')({
  prefix:'/lm'  //路由前缀
})
const controllers = require('../controllers/home/index')
router.get('/index/index',controllers)

module.exports = router