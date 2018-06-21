const connectionFactory = require('./../infra/connectionFactory')
class LivrosDao {
    getAllLivros(callback) {
        const connection = connectionFactory()

        connection.query('SELECT * FROM livros', (err, livros, fields) => {
            if(err){
              console.log(err)
            }

            callback(err, livros, fields)
          })      

        connection.end()
    }
}

module.exports = LivrosDao