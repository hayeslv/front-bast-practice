// mock接口 mock数据
const express = require("express")

const app = express()

app.get('/api/info', (req, res)=>{
  res.json({
    name: "dylan"
  })
})

app.listen("9092", ()=>{
  console.log('app listen success in 9092');
})
