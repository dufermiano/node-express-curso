const express = require('express')
const port = 3000
const server = express()

server.set('view engine', 'ejs')
server.use(express.static('./public'))

require('./app.js').rotas(server)

// const objeto = require('./app.js')
// objeto.rotas(server)

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})