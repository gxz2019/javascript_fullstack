// const https = require('https');

// let url = 'https://www.jianshu.com/';

// https.get(url, function (res) {
//     let chunks = [],
//         size = 0;
//     res.on('data', function (chunk) {
//         chunks.push(chunk);
//         size += chunk.length;
//     });

//     res.on('end', function () {
//         console.log('数据包传输完毕');
//         let data = Buffer.concat(chunks, size);
//         console.log(data);
//         let html = data.toString();
//         console.log(html);
//     });
// })
// const http = require('http')
// const url = require('url')
// const path = require('path')
// var server = http.createServer(function(req,res){
//   console.log(req.method+'*****'+req.url)
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   res.end('<h1>hello world</h1>')
// })
// server.listen(5000,()=> {
//   console.log('qidong')
// })

const http = require('http')
const server = http.createServer((req,res) => {
  
})