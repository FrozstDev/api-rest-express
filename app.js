require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnection = require('./config/mongo')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 5000

app.disable('x-powered-by') // ? disable x-powered-by: Express from headers
app.use(cors()) // ? cors es un plugin para el servidor, que nos permite evitar el error de origen cruzado de navegadores
app.use(express.json())

/**
 * Routes
 */
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, world!' })
})

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}/api`)
})

dbConnection()
