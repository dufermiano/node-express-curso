const LivrosDao = require('./../dao/LivrosDao')
const connectionFactory = require('./../infra/connectionFactory')

module.exports = (server) => { 
  
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
}