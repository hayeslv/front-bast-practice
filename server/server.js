/*
 * @Author: Lvhz
 * @Date: 2020-04-11 22:20:02
 * @Descripttion: mock接口 mock数据
 */
const express = require("express")

const app = express()

app.get('/api/info', (req, res)=>{
  res.json({
    name: "dylan"
  })
})

app.listen("3000", ()=>{
  console.log('app listen success in 3000');
})
