const express = require('express')
const router = express.Router()

// TODO: http://localhost/tracks GET, POST, PUT, DELETE
router.get('/tracks', (req, res) => {
  const data = ['Hola', 'Mundo']

  res.send({ data })
})

module.exports = router
