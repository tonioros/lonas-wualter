const database = require('../database/psql-connection');
const usuario_model = {};

usuario_model.login = (datos, callback) => {
    database.query(`SELECT id, usuario FROM usuario WHERE usuario = '${datos.usuario}' AND password = '${datos.pass}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

module.exports = usuario_model;