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

  server.get('/form', (req, res) => {
    res.render('produtos/form')
  })

}

module.exports = rotas