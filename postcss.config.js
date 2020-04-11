// npm i postcss-loader autoprefixer -D
// 抹平浏览器对css的兼容问题（自动添加前缀）
module.exports = {
  plugins: [
    require('autoprefixer')({
      // 兼容浏览器最近的两个版本，兼容市场份额大于1%的浏览器
      overrideBrowserslist: ["last 2 versions", ">1%"]
    })
  ]
}