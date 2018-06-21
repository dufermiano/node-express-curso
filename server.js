const express = require('express')
const port = 3000
const consign = require('consign')
const server = express()

server.set('view engine', 'ejs')
server.use(express.static('./public'))

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