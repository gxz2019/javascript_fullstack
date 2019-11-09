## 跨域
浏览器 的安全策略：
两个服务器需要通信  需要遵守同源策略：同源就是同协议，同域名，同端口号
同源才会让你发出请求
不同源 就产生跨域

http://localhost:8080/index.html
http://localhost.com/api/v1


baidu.com   api.baidu.com

## cross-origin-resource-share
一个规范 允许服务器声明哪些源可以访问

## 请求的步骤
1. 简单请求：直接发起跨域请求
2. 复杂请求：先发起的预测(preFlight) 请求，预先试探一下服务器支不支持跨域请求，之后
才会发起正式的跨域请求。

简单请求 表单可以构造的请求

## jsonP
link script img:不受同源策略的影响