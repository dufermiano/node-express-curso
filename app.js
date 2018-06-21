const LivrosDao = require('./dao/LivrosDao')
const connectionFactory = require('./infra/connectionFactory')

function rotas(server) {
  server.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  // JSON -> JavaScript Object Notation
  server.get('/', (req, res) => {
    res.render('index')
  })

  server.get('/contato', (req, res) => {
    res.render('contato')
  })

  server.get('/produtos', (req, res) => {
    const connection = connectionFactory()
    const livrosDao = new LivrosDao(connection)
    
    livrosDao.getAll ((error, livros) => {

      if(error) {
        console.log(error)
      }
      res.render('produtos/lista', {livros})
    })

    connection.end()

  })

  server.get('/form', (req, res) => {
    res.render('produtos/form')
  })

  server.use((req, res) => {
    res.send('Essa página não existe!')
  })
}

module.exports = {
  rotas
}