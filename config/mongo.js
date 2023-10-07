const mongoose = require('mongoose')

const dbConnect = () => {
  const DB_URI = process.env.DB_URI

  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Connected to database successfully')
    })
    .catch((err) => {
      console.error('Error connecting to database', err)
    })
}

module.exports = dbConnect
