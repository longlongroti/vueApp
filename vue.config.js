/*个性定制脚手架的配置*/
module.exports = {
  publicPath: './',
  //publicPath 部署后请求路劲不同
  outputDir: '../hello/www',
//将打包目录指向/cordova-projec下的www、
  devServer:{
    port:8642,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true //用于控制请求头中的host值
      }
    }
  },
}
