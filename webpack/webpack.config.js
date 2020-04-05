const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

let website = {
  publicPath:'http://192.168.0.103:1717/'
}
module.exports = {
  entry:{
    entry:'./src/entry.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js',
    publicPath:website.publicPath
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:extractTextPlugin.extract({
          fallback:'style-loader',
          use:[{
            loader:'css-loader',
            options:{
              importLoaders:1
            }
          }, "postcss-loader"]
        })
      },
      {
        test:/\.(png|jpg|gif)/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:5000,
              esModule:false,
              outputPath:'images/'
            }
          }
        ]
      },
      {
        test:/\.(htm|html)$/i,
        use:['html-withimg-loader']
      },
      {
        test:/\.less$/,
        use:extractTextPlugin.extract({
          fallback:'style-loader',
          use:[{
            loader:'css-loader'
          },{
            loader:'less-loader'
          }]
        })
      }
    ]
  },
  plugins:[
    new htmlPlugin({
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:'./src/index.html'
    }),
    new extractTextPlugin('css/index.css')
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:'192.168.0.103',
    compress:true,
    port:1717
  }
}