const Koa = require('koa')

const initRouter = require('./lm-loader')

class lm {
  constructor(conf) {
    this.app = new Koa()
    this.router = initRouter()
    this.app.use(this.router.routes())
  }
  start(port) {
    this.app.listen(port,() => {
      console.log(`服务已启动:${port}`)
    })
  }
}
module.exports = lm