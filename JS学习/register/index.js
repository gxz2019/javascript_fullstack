const http = require('http');
const fs = require('fs');
const url1 = require('url')

// /register 展示一个 注册的html
// 注册成功之后  展示一个成功的html
http.createServer((req,res) => {
    const method = req.method
    const url = req.url;
    const urlObj = url1.parse(url)
    console.log('url',url)
    if(url === '/register' && method == 'GET'){
        //req res 两个对象继承了流Stream 和 时间 Event
        res.writeHead(200,{
            'Content-Type':'text/html;utf8'
        })
        fs.createReadStream('./register.html').pipe(res);
    }
    else if(urlObj.path = './sendemail' && method === 'GET'){
        const emailQs = urlObj.query;
        const email = emailQs.split('=')[1];
        res.writeHead(200,{
            'Content-Type' : 'appliction/json'
        })
        res.end(JSON.stringify({
            code:200,
            email
        }))
        console.log(emailQs)
    }
    else{
        res.end('访问出错');
    }
})
.listen(3344, () => {
    console.log('server is running http://localhost:3344')
})