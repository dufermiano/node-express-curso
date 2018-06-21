const mysql = require('mysql')

function createConnection(){
     return mysql.createConnection({
            user: 'root',
            password: 'root',
            database: 'curso_node',
            host: 'localhost' 
          })
      
}

module.exports = createConnection