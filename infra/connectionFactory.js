const mysql = require('mysql')

function createConnection(){
     return mysql.createConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            host: process.env.HOST 
          })
      
}

module.exports = createConnection