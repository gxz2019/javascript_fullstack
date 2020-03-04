const http = require('http');
const https = require('https')
const cheerio = require('cheerio')


function Spider(url,cb) {
  https.get(url,(res) => {
    let html = ''
    res.on('data',(chunk) => {
      html += chunk;

    })
    res.on('end',() => {
      // console.log(html);
      const $ = cheerio.load(html);
      let item = [];
      $('a').each(function () {
        const img = $('.clearfix .image img',this).attr('src');
        // const hotelName = $('.title h3',this).text();
        // const Ename = $('.title span',this).text();
        // const count1 = $('.four',this).text();
        // const count2 = $('.two',this).text();
        // const price = $('..price strong',this).text();
        // const text3 = $('.clearfix dd .extra',this).text().trim().substring(0,6);
        // const text4 = $('.clearfix dd .extra .author',this).text().trim();
        // const img2 = $('.clearfix dd .extra .author img',this).attr('src')

        if(text1 !== '') {
          item.push({
            img
            // img,hotelName,Ename,count1,count2,price
          })
        }
      })
      cb(item)
    })
  })
}
http.createServer((req,res) =>{
  Spider('https://m.mafengwo.cn/hotel/10156/?checkin=2020-04-13&checkout=2020-04-14',(data) => {
    console.log('data',data)
    res.writeHead(200,{
      'Content-type':'application/json',
      'Access-Control-Allow-origin':'*'
    })
    res.end(JSON.stringify(data))
    console.log('data',data)
  })
}).listen(9000,() =>{
  console.log('9000 is running')
})


