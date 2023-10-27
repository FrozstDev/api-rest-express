const express = require('express')
const router = express.Router()

const TrackController = require('../controllers/tracks')

// TODO: http://localhost/tracks GET, POST, PUT, DELETE
router.get('/', TrackController.getAll)
router.post('/', TrackController.create)

module.exports = router
