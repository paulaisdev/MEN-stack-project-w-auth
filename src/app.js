const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./config/database')

db.connect() 

app.use(cors())
app.use(express.json())

module.exports = app