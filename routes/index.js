const fs = require('fs')
const express = require('express')
const router = express.Router()

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

const registerRoutes = (router, pathRouter) => {
  fs.readdirSync(pathRouter).forEach((file) => {
    const filename = removeExtension(file)
    if (filename !== 'index') {
      router.use(`/${filename}`, require(`./${file}`))
    }
  })
}

registerRoutes(router, pathRouter)

module.exports = router
