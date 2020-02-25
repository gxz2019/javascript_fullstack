const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

//读取目录和文件
function load(dir, cb) {
  //获取dir的绝对路径
  const url = path.resolve(__dirname, dir)
  // console.log(url)
  //读取目录
  const files = fs.readdirSync(url)
  // console.log(files)

  //遍历files
  files.forEach(filename => {
    //去除扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    // console.log(file)
    cb(filename, file)
  })
}
// load('routes',(file) => {
//   console.log(file)
// })


//加载路由

function initRouter() {
  const router = new Router()
  load('routes',(filename,routes) => {
    const prefix = filename === 'index' ? '':`/${filename}`
    Object.keys(routes).forEach(key => {
      const [method,path] = key.split(' ')    //'get /' => ['get','/']
      console.log(`正在映射：${method.toLocaleUpperCase()} ${prefix} ${path}`)

      //注册路由
      //app.get('/',ctx => {})
      router[method](prefix+path,routes[key])

    })
  })
  return router
}
// initRouter()

module.exports = initRouter



