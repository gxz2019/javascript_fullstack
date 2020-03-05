const http = require('http')
const fs = require('fs')
const cheerio = require('cheerio') // 类似jquery
const request= require('request')
let i = 0
let url = "https://hotels.ctrip.com/hotel/hangzhou17#ctm_ref=hod_hp_sb_lst" // 要抓取的网页地址

function fetchPage(x) {
    startRequest(x)
}

function startRequest(x) {
    http.get(x, function(res) {
        let html = ''
        res.setEncoding('utf-8') // 防止中文乱码

        res.on('data', function (chunk) {
            html += chunk
        })
        res.on('end', function (){
            const $ = cheerio.load(html)
            // const time = $('.articleCon .property span:first-child').text().trim()
            // const news_item  = {
            //     title: $('.articleCon h2.title').text().trim(),
            //     time,
            //     i: i+1
            // }
            console.log(news_item)
            const news_title = $('.articleCon h3').text().trim() + '_____' + time
            // savedContent($, news_title)
            // savedImg($, news_title)
            i = i+1
            // 下一篇文章的url
			const nextLink = "http://www.scdzzx.net" + $(".others .next a").attr('href');
			if (i <= 500) {
                fetchPage(nextLink);
            }
        })
    }).on('error',function(err){
		console.log('err:', err);
	})
    
}
fetchPage(url)