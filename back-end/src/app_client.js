const express = require('express')
const cors = require('cors')
const router_client = require('./router_client')

const app_client = express()

app_client.use(express.json())
app_client.use(cors())
app_client.use(router_client)

module.exports = app_client;