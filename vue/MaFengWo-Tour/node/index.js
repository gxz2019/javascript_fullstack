const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  ctx.body = `<h1>hello world</h1>`
})
.listen(3000,() => {
  console.log('[server is running]')
})