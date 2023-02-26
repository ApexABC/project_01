const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456789',
  database: 'demo'
})
// 测试mysql连接
// db.query('SELECT 1', (err, results) => {
//   if (err) return console.log(err.message)
//   console.log(results)
// })
// 查询
db.query('SELECT * FROM user', (err, results) => {
  if (err) return console.log(err.message)
  console.log(results)
})
// 插入数据
const user = { username: 'ABC', password: '123456' }
const sqlStr = 'INSERT INTO user (username,password) VALUES(?,?)'
db.query(sqlStr, [user.username, user.password], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('数据插入成功')
  }
})
