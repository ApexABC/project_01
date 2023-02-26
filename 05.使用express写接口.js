const express = require('express')
const app = express()
// 导入cors
const cors = require('cors')
// 使用cors
app.use(cors())
// 配置解析json和ul
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 导入路由模块
const aipRouter = require('./06.apirouter')
const { use } = require('./06.apirouter')
app.use('/api', aipRouter)
// 监听
app.listen(80, (req, res) => {
  console.log('serve running at http://127.0.0.1')
})
