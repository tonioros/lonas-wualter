'use strict';

var database = require('../database/mysql-connection');
var usuario_model = {};

usuario_model.login = (datos, callback) => {
    database.query('SELECT id, usuario FROM usuario WHERE usuario = ? AND password = ?', datos, (error, result) => {
        if (!!error) {
            callback("Error al obtener datos de la base de datos " + error, false);
        }
        callback(result, true);
    });
};

module.exports = usuario_model;