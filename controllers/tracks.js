const { tracksModel } = require('../models')

class TrackController {
  static async getAll (req, res) {
    const data = await tracksModel.find({})
    res.json({ data })
  }

  static getOne (req, res) {}
  static async create (req, res) {
    const { body } = req
    const data = await tracksModel.create(body)
    res.json({ data })
  }

  static update (req, res) {}
  static delete (req, res) {}
}

module.exports = TrackController
