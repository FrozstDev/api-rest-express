const express = require('express')
const uploadMiddleware = require('../utils/handleStorage')
const StorageController = require('../controllers/storage')
const router = express.Router()

router.post('/', uploadMiddleware.single('myFile'), StorageController.create)

module.exports = router
