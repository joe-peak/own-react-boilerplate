const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const baseConfig = require('./webpack.common.config');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  performance: false,
  // 项目打包编译后的输出
  output: {
    //将注入到html中的js文件前面加上地址
    // publicPath: 'http://cdn.com.cn',
    // 输出绝对路径
    path: path.resolve(__dirname, '../dist'),
    // 输出的文件名
    filename: '[name].[contenthash].js',
    // main.js异步加载的间接的js文件。用来打包import('module')方法中引入的模块
    chunkFilename: '[name].[contenthash].chunk.js',
  },
  optimization: {
    minimizer: [
      // 压缩css文件
      new OptimizeCSSAssetsPlugin({}),
      // 压缩js文件
      new UglifyJsPlugin({
        cache: true,
        sourceMap: true,
        parallel: true,
      }),
    ],
  },
  plugins: [
    // 开启打包分析工具
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8889,
        reportFilename: 'analyzer.html',
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info'
    }),

    // 抽离css文件
    new MiniCssExtractPlugin({
      // 直接引用的样式文件
      filename: '[name].css',
      // 间接引用的样式文件
      chunkFilename: '[name].chunk.css',
    }),
  ]
};

module.exports = env => webpackMerge(baseConfig(env), prodConfig);
