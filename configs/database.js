const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
})
