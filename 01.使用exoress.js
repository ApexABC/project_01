// 导入express
const express = require('express')
// 创建web服务器
const app = express()

// 监听请求
app.get('/user', (req, res) => {
  // 向客户端相应
  res.send({ name: 'zd', age: 18, gender: '男' })
  // console.log(req.query)
  // res.send(req.query)
  // res.send(req.params)
})
app.post('/user', (req, res) => {
  res.send('请求成功')
})

// 启动服务器
app.listen(80, function () {
  console.log('express running at http://127.0.0.1')
})
