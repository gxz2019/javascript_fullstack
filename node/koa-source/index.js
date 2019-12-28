// let http = require('http')
// let server = http.createServer((req,res) => {
//   res.end('hello world')
// })
// server.listen(3000,() => {
//   console.log('server is running')
// })
// const koa = require('koa')
// const app = new koa()

// app.use((ctx,next) => {
//   ctx.body = 'hello world'
// })
// app.listen(3000,() => {
//   console.log('server is running')
// })
let mykoa = require('./lib/application')
let app = new mykoa()

app.use((ctx) => {
  console.log(ctx.req.url)
  console.log(ctx.request.req.url)
  console.log(ctx.response.req.url)
  console.log(ctx.request.url)
  console.log(ctx.response.url)
  console.log(ctx.url)
  console.log(ctx.path)
})

app.listen(3000,() => {
  console.log('server is running')
})