const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

class TrackController {
  static async getAll (req, res) {
    try {
      const data = await tracksModel.find({})
      res.json({ data })
    } catch (error) {
      handleHttpError(res, 'Internal Server Error', 500)
    }
  }

  static async getOne (req, res) {
    try {
      const { id } = req.params
      const data = await tracksModel.findById(id)
      res.json({ data })
    } catch (error) {
      handleHttpError(res, 'Internal Server Error', 500)
    }
  }

  static async create (req, res) {
    try {
      const { body } = req
      const data = await tracksModel.create(body)
      res.json(data)
    } catch (error) {
      handleHttpError(res, 'Internal Server Error', 500)
    }
  }

  static async update (req, res) {
    try {
      const { id } = req.params
      const { body } = req

      const filter = { _id: id }
      const dataUpdate = await tracksModel.findOneAndUpdate(filter, body, { new: true })
      res.json({ dataUpdate })
    } catch (error) {
      handleHttpError(res, 'Internal Server Error', 500)
    }
  }

  static async delete (req, res) {
    try {
      const { id } = req.params

      const filter = { _id: id }
      const dataDelete = await tracksModel.deleteOne(filter)
      res.json({ dataDelete })
    } catch (error) {
      handleHttpError(res, 'Internal Server Error', 500)
    }
  }
}

module.exports = TrackController
