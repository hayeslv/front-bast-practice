/*
 * @Author: Lvhz
 * @Date: 2020-04-16 20:53:39
 * @Descripttion: 多页面通用打包方案
 */

const path = require('path')
const glob = require('glob') // 处理正则信息 npm i glob -D
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


const setMpa = () => {
  const entry = {}
  const htmlwebpackplugin = []

  // 分析入口
  const entryFiles = glob.sync(path.join(__dirname, "../src/mpa/*/index.js"))
  
  // 过滤信息拿到入口名称
  entryFiles.map(item=>{
    const flag = /src\/mpa\/(.*)\/index\.js$/.test(item)
    const pageName = flag && RegExp.$1
    entry[pageName] = item

    // 配置htmlplugin
    htmlwebpackplugin.push(
      new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: `${pageName}.html`,
        chunks: [pageName]
      })
    )
  })
  console.log(entry);

  return {
    entry,
    htmlwebpackplugin
  }
}

const { entry, htmlwebpackplugin } = setMpa()

module.exports = {
  entry,
  output: {
    // 输出路径，必须是绝对路径
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  mode: "development", 
  plugins: [
    ...htmlwebpackplugin,
    new CleanWebpackPlugin()
  ]
}