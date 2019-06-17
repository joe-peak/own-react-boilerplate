const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.common.config');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // 项目打包编译后的输出
  output: {
    //将注入到html中的js文件前面加上地址
    // publicPath: 'http://cdn.com.cn',
    publicPath: '/',
    // 输出绝对路径
    path: path.resolve(__dirname, '../dist'),
    // 输出的文件名
    filename: '[hash].js',
    // main.js异步加载的间接的js文件。用来打包import('module')方法中引入的模块
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    // contentBase: '../dist',
    open: true,
    port: 3000,
    // 开启热模块替换
    hot: true,
    // 路由开启history模式
    historyApiFallback: true,
    // 配置跨域，访问的域名会被代理到本地的3000端口
    proxy: {
      '/api': {
        target: 'http://localhost: 3000',
        pathRewrite: {
          '^/api': '',
        },
        // 支持跨域请求
        changeOrigin: true,
        // 处理https请求
        secure: true,
        // 设置请求头
        header: {},
      },
    },
  },
  plugins: [
    // 使用模块热更新插件
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    // 开启使用Tree Shaking, 生产环境会自动开启
    usedExports: true,
  }
};

//将开发配置和基础公共配置merge
module.exports = env => webpackMerge(baseConfig(env), devConfig);
