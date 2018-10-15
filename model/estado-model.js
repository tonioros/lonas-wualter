const database = require('../database/psql-connection');
const estado_model = {};

estado_model.selectAll = (callback) => {
    database.query(`select nombre_estado, tipo_estado from estado`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

estado_model.select = (datos, callback) => {
    database.query(`select nombre_estado, tipo_estado from estado WHERE id = ${datos.id}`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

estado_model.insert = (datos, callback) => {
    database.query(`INSERT INTO estado(nombre_estado, tipo_estado) VALUES (${datos.nombre_estado}, ${datos.tipo_estado});`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};


estado_model.update = (datos, callback) => {
    database.query(`UPDATE estado SET nombre_estado = ${datos.nombre_estado}, tipo_estado = ${datos.tipo_estado} WHERE id = ${datos.id};`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

estado_model.delete = (datos, callback) => {
    database.query(`DELETE FROM estado WHERE id = ${datos.id};`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

module.exports = estado_model;