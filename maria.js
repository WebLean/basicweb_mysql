const maria = require('mysql');
const conn = maria.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 's01va',
    database: 'NODEJS'
});

module.exports = conn;