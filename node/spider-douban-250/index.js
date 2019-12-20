const https = require('https');
const http = require('http');
const cheerio = require('cheerio');

// doubanSpider('https://movie.douban.com/top250?start=25&filter=',(data) => {
//     console.log(data)
// })
function doubanSpider(url,cb){
    https.get(url, (res) => {
    let html = '';
    //以流的形式传出
    res.on('data', (chunk) => {
        html += chunk;
    })
    res.on('end', () => {
        // console.log(html)
        const $ = cheerio.load(html);
        let movies = [];
        $('.tn-warpper').each(function () {
            //拿到每一个电影
            // const picUrl = $('.pic img', this).attr('src');
            // const title = $('.tn-wrapper dl dt a', this).text();
            const img1 = $('dl dt a', this).text();
            // const title1 = $('.tn-wrapper dl dd a', this).text();
            // const title2 = $('.tn-wrapper .tn-extra .tn-user a', this).text();
            // const title3 = $('.clearfix .author', this).text();
            // const img2 = $('.tn-wrapper .tn-extra .tn-nums', this).text();
            // console.log({ picUrl })
            // console.log({ title })
            // console.log({ star })
            // console.log({ inq })
            movies.push({
                // title,
                img1,
                // title1,
                // title2,
                // title3,
                // img2
            })
        })
        cb(movies)

    })
})
}


http.createServer((req,res)=>{
    doubanSpider('https://www.mafengwo.cn/',(data) =>{
        //text/plain 纯文本
        //text/html html
        //mime 类型
        console.log('data',data)
        res.writeHead(200,{
            'Content-type':'application/json',
            'Access-Control-Allow-origin':'*'
        })
        res.end(JSON.stringify(data))//把一个对象变成字符串
    })
    
}).listen(3001,() => {
    console.log('server is running 3000')
})

