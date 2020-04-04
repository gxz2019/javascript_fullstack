## 配置文件和出口webpack.config.js
module.exports = {
  entry : {}   //入口
  output : {}   //出口
  module: {}  //模块  存放loader，例如解读css  图片如何转换  压缩
  plugins：{}  //存放插件  用于生产模板  和 各项功能
  devServer：{}  //配置webpack开发服务功能 比如热加载
}


#### 
entry:{entry:./src/entey.js}  相对路径
output:{
  path:path.resolve(__dirname,'dist')  //绝对路径
  filename："[name].js"
}

## 配置文件:服务和热更新
npm install webpack-dev-server –save-dev
devServer:{
  contentBase:path.resolve(__dirname,'dist')  打包后的文件存放地，，要绝对路径
  host:'localhost'  服务器的ip地址
  compress:true   服务端压缩是否开启
  prot:'xxxx'   配置服务端口号
}

在package.json里面配置
"scripts": {
    "server":"webpack-dev-server"
 },


## 模块：css文件打包
module:{
  rules:[{
    test:/\.css$/,      //用于匹配文件后缀，写一个正则
    use:[{
      loader:'style-loader'    //用来处理css文件中的url等
    },{
      loader:'css-loader'    //它是用来将css插入到页面的style标签
    }]
  },{
  }]
}

## 配置js压缩





