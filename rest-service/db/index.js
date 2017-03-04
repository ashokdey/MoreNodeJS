'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'rest_api'
});

connection.connect();

let db = connection;

module.exports = db;