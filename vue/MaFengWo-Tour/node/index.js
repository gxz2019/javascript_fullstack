const Koa = require('koa')
const app = new Koa()
const router = require('./routes/index')



app.use(router.routes())

app.listen(3000,() => {
  console.log('3000端口已启动')
})