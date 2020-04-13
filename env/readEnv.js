/*
 * @Author: Lvhz
 * @Date: 2020-04-13 21:15:20
 * @Descripttion: 读取env环境变量文件，将其转换成对象
 */

const fs = require('fs');
const path = require('path');

module.exports = (file)=>{ // file为文件路径
  let fileName = path.join(__dirname, file);
  let data = fs.readFileSync(fileName, { encoding: "utf8" });
  // 替换“换行符”和“回车符”
  let d = data.replace(/\r/g, ',').replace(/\n/g, '');
  let arr = d.split(',').map(item=>{
    return item.split('=')
  })
  let obj = {}
  arr.forEach(item=>{
    obj[item[0]] = item[1]
  })
  return obj

  // 可以继续进行处理
  // vue-cli3：规定环境变量的key必须以 VUE_APP_ 开头
  // create-react-app：规定环境变量的key必须以 REACT_APP_ 开头
}