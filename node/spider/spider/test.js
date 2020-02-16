// var cherrio = require('cheerio')
// var $ = cherrio.load(`
// <ul id="fruits">
// <li class="apple">Apple</li>
// <li class="orange">Orange</li>
// <li class="pear">Pear</li>
// </ul>
// `)   //加载DOM结构

// $('ul .apple').text()   //Apple
// $('ul').find('li').length   //3
// $('li').attr('class')
var http = require("http");
 
// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}
download('https://www.baidu.com/')

