/*
 * @Author: Lvhz
 * @Date: 2020-04-12 09:07:23
 * @Descripttion: 入口
 */
// import '@babel/polyfill'

import init from './init.js';
import { isValidBrowser } from '@/utils/webkitAuth.js'; //浏览器版本检测

console.log(process.env, '环境变量')

if(isValidBrowser){
  init.initApp()
}else{
  // 浏览器检测未通过，建议下载最新浏览器
  // init.initSuggestPage();
}
