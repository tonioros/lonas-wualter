'use strict';

var  mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'lonaswualter',
});

try {
    connection.connect()
} catch (e) {
    console.log(e.message);
}

module.exports = connection;