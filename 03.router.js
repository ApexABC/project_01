const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  res.send('get success')
})
router.post('/add', (req, res) => {
  res.send('post success')
})

module.exports = router
