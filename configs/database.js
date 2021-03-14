const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
    database: 'library',
    host: 'localhost',
    user: 'root',
    password: 'password'
})
