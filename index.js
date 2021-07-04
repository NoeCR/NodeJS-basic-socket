const express = require('express')
// Express App
const app = express()

const path = require('path')
require('dotenv').config()

const publicPath = path.resolve(__dirname, 'src')
app.use(express.static(publicPath))

// Node Server
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server)

require('./src/sockets/socket')


server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err)

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
  console.log('Server listen in port: ', process.env.PORT)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

})