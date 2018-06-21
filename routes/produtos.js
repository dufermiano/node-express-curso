const connection = connectionFactory()
module.exports = function(app){
   
    app.get('/produtos', (req, res) => {
    connection.query('SELECT * FROM livros', (err, livros, fields) => {
      if(err){
        console.log(err)
      }
      res.render('produtos/lista', {livros})
    })

    connection.end()
       
    })
}