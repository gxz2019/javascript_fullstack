var fs = require('fs')
var AipOcrClient = require('baidu-aip-sdk').ocr;
//图片识别
var image = fs.readFileSync('./car.jpg').toString('base64');
var APP_ID = '17799052';
var APP_KEY = 'NqB3pBiss2UUihNTQoDVcMMY';
var SECRET_KEY = 'j5kWuiDw4jtIqh6Ny4KnOqRdPF4DxlTc';
var client = new AipOcrClient(APP_ID,APP_KEY,SECRET_KEY);
var options = {};
client.licensePlate(image,options).then(function(result){
  console.log(result)
})
  .catch(function(err){
    console.log(err)
  })