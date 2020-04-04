const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
  entry:{   //入口
    index:'./src/index.js',
  },
  output:{   //出口
    path:path.resolve(__dirname,'dist'),   //绝对路径
    filename:'[name].js'
  },
  module:{   //配置loader  
    rules:[   //规则
      {   
        test:/\.css$/,    //后缀名为css
        use:[{
          loader:"style-loader"
        },{
          loader:"css-loader"
        }]
      },
      {
        test:/\.(png|jpg|gif)/,
        use:[{
          loader:'url-loader',
          options:{
            limit:5000
          }
        }]
      }
    ]
  },
  plugins:[   //插件
    new uglify(),
    new htmlPlugin({
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:'./src/index.html'
    })
  ],
  devServer:{  //生产环境配置基本信息
    contentBase:path.resolve(__dirname,'dist'),  //打包的文件存放地
    host:'192.168.0.103',   //ipv网址
    compress:true,    //是否压缩
    port:1717   //端口号
  }
}