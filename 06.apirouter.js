const express = require('express')
const aipRouter = express.Router()

// 挂载路由
aipRouter.get('/get', (req, res) => {
  const query = req.query
  res.send({
    status: 0, //0代表成功，1代表失败
    msg: 'get请求成功',
    data: query
  })
})
aipRouter.post('/post', (req, res) => {
  const body = req.body
  res.send({
    status: 0,
    msg: 'post请求成功',
    data: body
  })
})
module.exports = aipRouter
