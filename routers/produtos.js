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

server.get('/produtos/form', (req, res) => {
  res.render('produtos/form')
})

server.post('/produtos', (req, res) => {
  const connection = connectionFactory()
  const livro = req.body
  const livrosDao = new LivrosDao(connection)
  console.log(livro)

  livrosDao.save(livro, (err) => {

    if (err){
      console.log(err)
    }
    
    res.redirect('/produtos')
  })

})

}