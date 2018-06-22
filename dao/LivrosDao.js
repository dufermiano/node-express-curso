class LivrosDao {
    constructor(connection){
        this.connection = connection
    }

    getAll(callback) {
        this.connection.query('SELECT * FROM livros', callback)
    }

    save(livro, callback) {
        this.connection.query('INSERT INTO LIVROS SET ?', livro, callback)
    }
}

module.exports = LivrosDao