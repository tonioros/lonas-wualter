const database = require('../database/psql-connection');
const usuario_model = {};

usuario_model.login = (datos, callback) => {
    database.query(`SELECT id, usuario, password FROM usuario WHERE usuario = '${datos.usuario}' AND password = '${datos.pass}'`,
        (error, result) => {
            if (!!error) {
                callback("Error al obtener datos de la base de datos " + error, false);
            } else {
                if (result.rows && result.rows.length > 0) {
                    const usuario = result.rows[0];
                    if (usuario.usuario == datos.usuario && usuario.password == datos.pass) {
                        callback("Ingreso correcto", true);
                    } else {
                        callback("Usuario no encontrado", false);
                    }
                } else {
                    callback("Usuario no encontrado", false);
                }
            }


        });
};

module.exports = usuario_model;