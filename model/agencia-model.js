const database = require('../database/psql-connection');
const agenda_model = {};

agenda_model.selectAll = (callback) => {
    database.query(`select id,nombre, direccion, lat, lon from agencia`,
        (error, result) => {
            if (!!error) {
                callback("Error al obtener datos de la base de datos " + error, false);
            }
            callback(result.rows, true);
        });
};

agenda_model.select = (datos, callback) => {
    database.query(`SELECT id,nombre, direccion, lat, lon FROM agencia WHERE id = '${datos.id}'`,
        (error, result) => {
            if (!!error) {
                callback("Error al obtener datos de la base de datos " + error, false);
            }
            callback(result.rows, true);
        });
};

agenda_model.insert = (datos, callback) => {
    database.query(`INSERT INTO agencia(nombre, direccion, lat, lon)
                    VALUES ('${datos.nombre}', '${datos.direccion}', '${datos.lat}', '${datos.lon}');`,
        (error, result) => {
            if (!!error) {
                callback("Error al obtener datos de la base de datos " + error, false);
            }
            callback(result.rows, true);
        });
};


agenda_model.update = (datos, callback) => {
    database.query(`UPDATE agencia SET nombre = '${datos.nombre}', direccion = '${datos.direccion}', 
                    lat = '${datos.lat}', lon = '${datos.lon} 'WHERE id = '${datos.id}';`,
        (error, result) => {
            if (!!error) {
                callback("Error al obtener datos de la base de datos " + error, false);
            }
            callback(result.rows, true);
        });
};

agenda_model.delete = (datos, callback) => {
    database.query(`DELETE FROM agencia WHERE id = '${datos.id}';`,
        (error, result) => {
            if (!!error) {
                callback("Error al obtener datos de la base de datos " + error, false);
            }
            callback(result.rows, true);
        });
};

module.exports = agenda_model;