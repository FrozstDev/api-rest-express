const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL

class StorageController {
  static async getAll (req, res) {
    const data = await storageModel.find({})
    res.json({ data })
  }

  static getOne (req, res) {}
  static async create (req, res) {
    const { file } = req

    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`
    }

    const data = await storageModel.create(fileData)
    res.json({ data })
  }

  static update (req, res) {}
  static delete (req, res) {}
}

module.exports = StorageController
