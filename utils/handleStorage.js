const multer = require('multer')
const path = require('path')

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = path.join(__dirname, '../storage')
    cb(null, pathStorage)
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop()
    const newFileName = `file-${Date.now()}.${ext}`
    cb(null, newFileName)
  }
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware
