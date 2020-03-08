var http = require('http');


var str = '{"name":"gxz",id:1}'


var server = http.createServer(function(request,response) {
  response.writeHead(200,{
    'Content-type':'application/json',
    'Access-Control-Allow-origin':'*'
})
  response.write(JSON.stringify(str))
  response.end()
})

server.listen(8080,() => {
  console.log('启动'+str)
})