const express = require('express')
const app = express()
// 导入路由模块
const router = require('./03.router.js')
// 注册路由模块
app.use(router)

app.listen(80, () => {
  console.log('running at http://127.0.0.1')
})
