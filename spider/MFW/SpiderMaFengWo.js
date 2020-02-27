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
        // const img1 = $('.r-pic img',this).attr('src');
        const text1 = $('.title',this).text().trim();
        const img1 = $('.clearfix dt img',this).attr('src');
        const text2 = $('.clearfix dd .summary',this).text().trim();
        const text3 = $('.clearfix dd .extra',this).text().trim().substring(0,6);
        const text4 = $('.clearfix dd .extra .author',this).text().trim();
        const img2 = $('.clearfix dd .extra .author img',this).attr('src')

        if(text1 !== '') {
          item.push({
            text1,text2,text3,text4,img1,img2
          })
        }
      })
      cb(item)
    })
  })
}
http.createServer((req,res) =>{
  Spider('https://m.mafengwo.cn/',(data) => {
    // console.log('data',data)
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


