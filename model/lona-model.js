const database = require('../database/psql-connection');
const lona_model = {};

lona_model.selectAll = (callback) => {
    database.query(`select id, descripcion, tamanio from lona`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

lona_model.select = (datos, callback) => {
    database.query(`select id, descripcion, tamanio from lona WHERE id = ${datos.id}`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

lona_model.insert = (datos, callback) => {
    database.query(`INSERT INTO lona(descripcion, tamanio) VALUES (${datos.descripcion}, ${datos.tamanio});`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};


lona_model.update = (datos, callback) => {
    database.query(`UPDATE lona SET descripcion = ${datos.descripcion}, tamanio = ${datos.tamanio} WHERE id = ${datos.id};`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

lona_model.delete = (datos, callback) => {
    database.query(`DELETE FROM lona WHERE id = ${datos.id};`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

module.exports = lona_model;