var express = require('express');
var session = require("express-session");
var MySQLStore = require('express-mysql-session')(session);
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'world'
};

var sessionStore = new MySQLStore(options);


module.exports = sessionStore;