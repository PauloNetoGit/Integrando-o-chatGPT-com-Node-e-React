const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

require("dotenv").config()

const app = express()

// minha aplicação vai retornar JSON
app.use(express.json())
// usando controles do cors 'endereços'.
app.use(cors())
app.use(routes)

module.exports = app