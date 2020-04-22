<!--
 * @Author: Lvhz
 * @Date: 2020-04-11 16:18:46
 * @Descripttion: 
 -->
## Webpack  

&emsp;&emsp;webpack是一个打包模块化Javascript的工具，它会从入口模块出发，识别源码中的模块化导入语句，递归地找出入口文件中的所有依赖，将入口和其所有的依赖打包到一个单独的文件中。  
&emsp;&emsp;是工程化、自动化思想在前端开发中的提现。  

### 安装  
推荐局部安装  
&emsp;&emsp;全局安装会造成版本指定，如果多个项目依赖的版本不同，会造成构建失败。
```
npm i webpack webpack-cli -D
```

查看是否安装成功  
npx是npm自带的，会到当前项目目录中去找
```
npx webpack -v
```  

指定版本安装  
```
npm i webpack@xxx.xx -D
```  

卸载  
```
npm uninstall webpack webpack-cli -g
```  

<br>

### webpack默认配置  

* 默认入口模块
    * ./src/index.js
* 默认输出
    * 名称： main.js
    * 路径：./dist
* webpack默认支持多种模块类型：commonJS、esmodule、AMD
* webpack默认支持js模块和json模块


```!
webpack不适合用于Javascript库的构建，因为不够纯粹。一般使用 Rollup
```  

<br>

### Plugins  
&emsp;&emsp;plugin 可以在webpack运行到某个阶段的时候，帮你做一些事情，类似于生命周期的概念扩展插件。在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或你想要做的事情。作用于整个构建过程。  

### WebpackDevServer  
&emsp;&emsp;每次修改完代码都需要重新打包一次，打开浏览器，刷新一次，很麻烦。我们可以使用webpackdevserver来改善这块的体验。

* 安装  
```
npm i webpack-dev-server -D
```

### Babel处理ES6  
&emsp;&emsp;Babel是Javascript编译器，能将ES6代码转换成ES5代码，让我们开发过程中放心使用JS新特性而不用担心兼容性问题。并且还可以通过插件机制根据需求灵活的扩展。  
&emsp;&emsp;Babel在执行编译的过程中，会从项目根目录下的 .babelrc JSON文件中读取配置。没有该文件则会从loader中的options中读取配置。  

#### 安装  

```
npm i babel-loader @babel-core @babel/preset-env -D
```

* babel-loader是webpack与babel的通信桥梁，不会做把es6转成es5的工作，这部分工作需要用到@babel/preset-env来做
* @babel/preset-env（面向未来的转换规则） 里包含了es6,7,8 转es5的转换规则

&emsp;&emsp;默认的Babel只支持let等一些基础的特性转换，Promise等一些还没有转换过来，这时候需要借助 @babel/polyfill，把es的新特性都装进来，来弥补低版本浏览器中缺失的特性。  
```
npm i @babel/polyfill -S
```  

#### 按需加装，减少冗余  
&emsp;&emsp;会发现打包的体积大了很多，这是因为polyfill默认会把所有特性注入进来，可以让我用到的es6+才会注入，没用到的不注入，从而减少打包体积。  
&emsp;&emsp;useBuiltIns 选项是babel7 的新功能，这个选项告诉babel如何配置 @babel/polyfill。它有三个参数可以使用：

* entry：需要在webpack的入口文件里 import "@babel/polyfill" 一次。babel会根据你的使用情况导入垫片，没有使用的功能不会被导入相应的垫片。
* usage（推荐使用）：不需要import，全自动检测，但是要安装 @babel/polyfill 。（试验阶段）
* false（不推荐）：如果你 import "@babel/polyfill" ，它不会排除没有使用的垫片，程序体积会庞大。  

注意：usage的行为类似babel-transform-runtime，不会造成全局污染，因此也不会对类似 Array.prototype.include() 进行polyfill。

### 多页面打包  
1、修改entry  
```
entry: {
  list: "./webpack/multiPageBuild/list.js",
  detail: "./webpack/multiPageBuild/detail.js"
},
```  
2、修改output的filename  
```
output: {
  // 输出路径，必须是绝对路径
  path: resolve("dist"),
  // filename: "main.js", // 单页面打包输出
  filename: "[name].js", // 多页面打包输出
  publicPath: process.env.VUE_APP_BASEURL,
},
```  
3、修改HtmlWebpackPlugin（每多一个打包的页面，就多一个plugin）  
```
new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "list.html",
  chunks: ["list"]
}),
new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "detail.html",
  chunks: ["detail"]
}),
```
