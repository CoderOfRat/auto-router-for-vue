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
    proxy: 'http://localhost:4000', // 没匹配到静态文件的时候都代理到此地址
  }
}
