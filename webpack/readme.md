## 1.配置文件和出口webpack.config.js
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

## 2.配置文件:服务和热更新
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


## 3.模块：css文件打包
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

## 4.配置js压缩
不需要安装,webpack自动集成了
const uglify = `require`('uglifyjs-webpack-plugin');
 plugins:[
        new uglify()
    ],

## 5.插件配置：html文件的发布
const htmlPlugin= `require`('html-webpack-plugin');
要npm安装
plugins:[
  new htmlPlugin({
    minfiy:{   //对html文件进行压缩
      removeAttributeQuotes:true    //除掉属性的双引号
    },
    hash:true  开发中js有缓存效果，加入hash，避免缓存效果
    template:'./src/index.html'  要打包的html的路径和文件名称
  })
]

## 6.css中图片的处理
<div id="tupian"></div>  
#tupian{
   background-image: url(../images/manhua.png);
   width:466px;
   height:453px;
}
引入loader   
file-loader  解决引入路径的有关问题，比如打包后的图片路径。。。。。 
url-loader(实际上引入这一个就行，因为包含了file-loader的功能)   base64
module:{
  rules:[
    {
    test:/\.css$/,      //用于匹配文件后缀，写一个正则
    use:[{
      loader:'style-loader'    //用来处理css文件中的url等
    },{
      loader:'css-loader'    //它是用来将css插入到页面的style标签
    }]
  },{
    //上面的打包css引入的loader
    //这里是打包图片需要引入的
    test:'/\.(png|jpg|gif)/',
    use:[
      {
        loader:'url-loader',
        options:{
          limit:50000  //大于50000则直接复制图片，小于则转换为base64
        }
      }
    ]
  }]
}

## 7.css分离与图片路径处理
extract-text-webpack-plugin   npm 安装
module对于css的打包要用extractTextPlugin.extract(
  fallback:style-loader,
  use:css-loader
)包裹


## 处理html中的图片
cnpm i html-withimg-loader引入
注意版本兼容问题
esModule:false,要在css的图片loader配置里面设置


## less的引入
cnpm i less less-loader -D
配置loader
css分离

## css进阶：自动处理css3属性前缀
cnpm i postcss autoprefixer -D
编写postcss.config.js配置，引入autoprefixer插件












