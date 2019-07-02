const path = require('path');
const webpack = require('webpack');
const webpackHtmlPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

const sassLoaders = [
  {
    loader: 'style-loader',
    options: {},
  },
  {
    loader: 'css-loader',
    options: {
      // 若scss文件中有嵌套的导入，2表示从postcss-loader向上解析
      importLoaders: 2,
      //关闭css模块，若开启css样式不会和其他模块发生耦合和冲突
      modules: false,
    },
  },
  {
    loader: 'sass-loader',
    options: {},
  },
  {
    loader: 'postcss-loader',
    options: {},
  }
];

const cssLoaders = [
  {
    loader: 'style-loader',
    options: {},
  },
  {
    loader: 'css-loader',
    options: {
      // importLoaders: 2,
      //关闭css模块，若开启css样式可以避免与其他模块发生耦合和冲突
      // module: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {},
  }
];

module.exports = env => {
  let minifyHtmlOpts = {};
  // 生产环境注入抽离css的loader
  if (env.production) {
    sassLoaders.splice(0, 1, MiniCssExtractPlugin.loader);
    cssLoaders.splice(0, 1, MiniCssExtractPlugin.loader);
    minifyHtmlOpts = {
      minify: {
        // 移除注释
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }
  }

  return {
    // 项目打包编译的入口文件
    entry: path.resolve(__dirname, '../src/index.js'),
    // 项目打包编译后的输出
    // output: {
    //   //将注入到html中的js文件前面加上地址
    //   // publicPath: 'http://cdn.com.cn',
    //   // 输出绝对路径
    //   path: path.resolve(__dirname, '../dist'),
    //   // 输出的文件名
    //   filename: '[hash].js',
    //   // main.js异步加载的间接的js文件。用来打包import('module')方法中引入的模块
    //   chunkFilename: '[name].chunk.js',
    // },
    resolve: {
      // 配置常用目录的简写映射
      alias: {
        '@components': path.resolve(__dirname, '../src/components'),
        '@fonts': path.resolve(__dirname, '../src/fonts'),
        '@images': path.resolve(__dirname, '../src/images'),
        '@styles': path.resolve(__dirname, '../src/styles'),
        '@pages': path.resolve(__dirname, '../src/pages'),
        '@utils': path.resolve(__dirname, '../src/utils'),
        '@configs': path.resolve(__dirname, '../src/configs'),
      },
      // 配置那些文件的引入可以省略后缀
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: cssLoaders,
        },
        {
          test: /\.scss$/,
          use: sassLoaders,
        },
        // typescript打包配置
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          enforce: 'pre',
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: true,
            cache: true,
          }
        },
        // 支持加载图片文件
        {
          test: /\.(gif|svg|png|jpg)$/,
          use: [
            {
              // 解决CSS等文件中的图片引入的路径问题
              loader: 'file-loader',
              options: {
                // 图片打包编译后的名称
                name: '[hash].[ext]',
                // 图片打包编译后的输出路径
                outputPath: 'images/'
              },
            },
          ],
        },
        {
          test:/\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              // 加载矢量图标
              loader: 'file-loader',
              options: {
                // 图片打包编译后的名称
                name: '[hash].[ext]',
                // 图片打包编译后的输出路径
                outputPath: 'fonts/'
              },
            }
          ],
        }
        // {
        //   test: /\.(gif|png|jpg)$/,
        //   use: [
        //     {
        //       // 解决CSS等文件中的图片引入的路径问题
        //       loader: 'url-loader',
        //       options: {
        //         // 图片打包编译后的名称
        //         name: '[hash].[ext]',
        //         // 图片打包编译后的输出路径
        //         outputPath: 'images/',
        //         limit: 200,
        //       },
        //     },
        //   ],
        // },
      ],
    },
    plugins: [
      new webpackHtmlPlugin({
        title: 'webpack boilerplate',
        //以index.html为模板，把打包生成的js自动引入到这个html文件中
        template: path.resolve(__dirname, '../src/index.html'),
        // 生产环境时压缩优化html文件的配置项
        ...minifyHtmlOpts
      }),
      new cleanWebpackPlugin(),
      // 通过垫片定义全局变量
      new webpack.ProvidePlugin({
        $: 'jquery', //发现模块中有$字符串，就自动引入iquery, 就可以用jquery
        _join: ['lodash', 'join'], //_join代表lodash里的join方法
      }),
      // 自动生成雪碧图
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(__dirname, 'src/ico'),
          glob: '*.png'
        },
        target: {
            image: path.resolve(__dirname, 'src/sprites/sprite.png'),
            css: path.resolve(__dirname, 'src/spritesmith-generated/sprite.styl')
        },
        apiOptions: {
            cssImageRef: "~sprite.png"
        }
      }),
    ],
    optimization: {
      // 兼容老版本webpack4，把manifest打包到runtime里，不影响业务代码和第三方模块
      runtimeChunk: {
        name: 'runtime',
      },
      // 启动代码分割
      splitChunks: {
        // 参数all, initial, async，分别对所有/同步/异步/代码进行分割
        chunks: 'all',
        // 分割启动阈值
        minSize: 3000, //大于30kb才进行分割
        maxSize: 0,
        // 打包生成的文件，当模块至少被使用多次才进行代码分割
        minChunks: 1,
        // 同时加载的异步模块数最多为5个
        maxAsyncRequests: 5,
        // 入口文件
        maxInitialRequests: 3,
        // 文件自动生成的连接符
        automaticNameDelimiter: '~',
        name: true,
        // 同步代码走缓存组
        cacheGroups: {
          // 抽离第三方库
          vendors: {
            // 指定是node_modules下的第三方包
            test: /[\\/]node_modules[\\/]/,
            //谁优先级大就把打包后的文件放到哪个组
            priority: -10,
            // 打包后的文件名，任意命名
            name: 'common/vendors.js',
          },
          // 抽离自定义公共代码
          utils: {
            test: /\.js$/,
            chunks: 'initial',
            name: 'common/utils',
            minSize: 0 // 只要超出0字节就生成一个新包
          },
          default: {
            minChunks: 2,
            priority: -20,
            //模块已经被打包过了，就不用再打包了，复用之前的就可以
            reuseExistingChunk: true,
            //打包之后的文件名
            name: 'common.js'
          }
        }
      }
    }
  };
};