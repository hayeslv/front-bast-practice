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
