const express = require('express')
const port = 3000
const consign = require('consign')
const bodyParser = require('body-parser')
const server = express()
require('dotenv').config()

server.set('view engine', 'ejs')
server.use(express.static('./public'))
server.use(bodyParser.urlencoded({extended: true}))

//lib consign que faz o include de todas as pastas
//serve para rotas, controlers, models...

consign()
  .include('./routers')
  .into(server)

server.use((req, res) => {
    res.send('Essa página não existe!')
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})