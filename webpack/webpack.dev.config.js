// webpack是基于nodeJS的
// 所以要使用CommonJS规范导出一个对象

const path = require('path')
const Webpack = require('webpack')
const readEnv = require('../env/readEnv.js')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = dir => path.resolve(__dirname, `../${dir}`)



module.exports = {
  entry: "./src/main.js", // 单页面打包
  // entry: { // 多页面打包
  //   list: "./src/mpa/list",
  //   detail: "./src/mpa/detail"
  // },
  output: {
    // 输出路径，必须是绝对路径
    path: resolve("dist"),
    // filename: "main.js", // 单页面打包输出
    filename: "[name].js", // 单页面多页面都可以用：打包输出
    publicPath: process.env.VUE_APP_BASEURL,
  },
  // 开发：development，生产：production。开发模式下，代码不会被压缩，便于调试
  mode: "development", 
  // 代码的映射关系，生产环境设置为none
  // devtool: "inline-source-map", // source-map、none、inline-source-map
  devServer: {
    contentBase: "./dist", // 服务器启动后的服务地址，这里启动后就可以访问 dist 目录下的资源了
    port: 8080,
    // open: true, // 当服务启动之后，自动打开浏览器
    hotOnly: true, // 开启热模块更新
    proxy: { // 代理
      "/api": {
        target: "http://localhost:3000"
      }
    },
    historyApiFallback: { // vue-router设置了history模式时，必须设置这里
      index: '/index.html'
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  // 处理模块
  module: {
    rules: [ // 做检测用：.css .png .ts等等
      // 处理vue文件：官方文档 https://vue-loader.vuejs.org/zh/guide/#vue-cli
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 处理图片：npm i file-loader -D
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        // use: ["file-loader"] // 单独使用loader时的写法
        use: [{ // 需要使用options时的写法
          // loader: "file-loader",
          // options: {
          //   name: "[name]_[hash:8].[ext]",
          //   outputPath: "images/" // 会在dist目录下创建一个images文件夹，图片都会放在里面，方便统一管理
          // },
          loader: "url-loader",
          options: {
            limit: 10000, // 图片小于10000字节（约10K）时以base64的方式引用
          }
        }]
      },
      // 处理字体文件（这里只列举.woff2）
      {
        test: /\.woff2$/,
        use: [{
          loader: "file-loader"
        }]
      },
      // 处理CSS：npm i style-loader css-loader -D
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader",
          options: {
            injectType: "singletonStyleTag" // 将多个style合并成一个style
          }
        }, "css-loader"]
      },
      // 处理scss： npm install sass-loader node-sass -D
      {
        test: /.(sass|scss)$/,
        // 这里是将css以style标签的方式放在html文件中
        // use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"] // postcss-loader的配置在 postcss.config.js 文件中

        // 这里是将css抽离独立文件的方式
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      // es6转码：npm i babel-loader @babel-core @babel/preset-env -D
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    // 可以开启缓存、压缩等操作
    // 单页面打包
    new HtmlWebpackPlugin({ // npm i html-webpack-plugin -D
      template: "./public/index.html",
      filename: "index.html"
    }),
    // new HtmlWebpackPlugin({ // 多页面打包
    //   template: "./public/index.html",
    //   filename: "list.html",
    //   chunks: ["list"]
    // }),
    // new HtmlWebpackPlugin({ // 多页面打包
    //   template: "./public/index.html",
    //   filename: "detail.html",
    //   chunks: ["detail"]
    // }),
    new CleanWebpackPlugin(), // npm i clean-webpack-plugin -D
    // 将css以独立文件的方式抽离出来
    new MiniCssExtractPlugin({ // npm i mini-css-extract-plugin -D
      filename: "[name]_[chunkhash:8].css"
    }),
    new VueLoaderPlugin(),
    new Webpack.DefinePlugin({ // 编译时配置的全局变量
      'process.env': readEnv('../env/development') //当前环境为开发环境
    }),
    new Webpack.HotModuleReplacementPlugin() // 热模块更新
  ]
}