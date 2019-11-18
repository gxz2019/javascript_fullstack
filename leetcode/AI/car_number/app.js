var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;//图片分类
var fs = require('fs');//文件模块
var APP_ID = '17798927';
var APP_KEY = 'DZLNtocL2tNGl66BFywiGMkA';
var SECRET_KEY = 'PRGnOmIEISzg51Ost4udfnjhVEIqDCRC';
//  内存 -> I/O
var image = fs.readFileSync('car2.jpg').toString("base64");//同步

var client = new AipImageClassifyClient(APP_ID,APP_KEY,SECRET_KEY);
client.carDetect(image).then(function(result){
  console.log(result)
})
  .catch(function(err) {
    console.log(err)
  })

// console.log(image)
