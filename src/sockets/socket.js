const { io } = require('../../index')
// Socket messages
io.on('connection', client => {
  console.log('Client Connected')

  client.on('disconnect', () => { console.log('Client Disconnect') })


  client.on('message', (payload) => console.log('Message ', payload))

  client.on('new-band', (payload) => {
    console.log('New band ', payload)

    io.emit('band-added', payload)
  })
})