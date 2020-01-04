var userName = 'gxz';
var timeStamp = Date.parse(new Date())  //生成时间戳
var jsonDatabase = {"loginName":userName,"loginTime":timeStamp};
var db = connect('log'); //use log数据库
db.login.insert(jsonDatabase)  //增

print('[demo];successd')