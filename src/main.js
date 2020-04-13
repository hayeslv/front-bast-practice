import init from './init.js';
import { isValidBrowser } from '@/utils/webkitAuth.js'; //浏览器版本检测


if(isValidBrowser){
  init.initApp()
}else{
  // 浏览器检测未通过，建议下载最新浏览器
  // init.initSuggestPage();
}