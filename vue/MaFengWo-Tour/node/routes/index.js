const router = require('koa-router')({
  prefix:'/gxz'
})

const constrollers = require('../controllers/index')

router.get('/index',constrollers)

module.exports = router