require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnection = require('./config/mongo')
const tracksRouter = require('./routes/tracks.routes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors()) // ? cors es un plugin para el servidor, que nos permite evitar el error de origen cruzado de navegadores

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', tracksRouter)

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})

dbConnection()
