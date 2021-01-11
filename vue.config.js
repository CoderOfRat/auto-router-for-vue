const BASE_URL = process.env.NODE_ENV === 'production' ? '/coderrat/' : '/'

const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false, // 保存时不进行格式化
  publicPath: BASE_URL, // 项目打包发布线上后的根目录
  // 自定义webpack配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.106.195:18090',
        changeOrigin: true, // 是否允许跨域
        ws: true, // webSocket全双工通信
        pathRewrite: { // 路径重写
          '^/api': ''
        }
      }
    },
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    historyApiFallback: true, // 解决history模式 请求遇到 Cant get /about 的问题

    disableHostCheck:  true,
    port: 9000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    hotOnly: false,

    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // 提示警告 console 是否显示
    // overlay: {
    //   warnings: false,
    //   errors: false
    // }
  }
}
