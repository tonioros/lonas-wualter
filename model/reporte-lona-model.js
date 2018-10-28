const database = require('../database/psql-connection');
const lona_model = {};

lona_model.selectAll = (callback) => {
    database.query(`select lona_id, observaciones, file_path, lat, lon, agenda_id from reporte_lona`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

lona_model.select = (datos, callback) => {
    database.query(`select lona_id, observaciones, file_path, lat, lon, agenda_id from reporte_lona WHERE id = '${datos.id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};


lona_model.selectByLona = (datos, callback) => {
    database.query(`select lona_id, observaciones, file_path, lat, lon, agenda_id from reporte_lona WHERE lona_id = '${datos.lona_id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

lona_model.selectByAgencia = (datos, callback) => {
    database.query(`select lona_id, observaciones, file_path, lat, lon, agenda_id from reporte_lona WHERE agenda_id = '${datos.agenda_id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

lona_model.insert = (datos, callback) => {
    database.query(`INSERT INTO reporte_lona(lona_id, observaciones, lat, lon, agenda_id)
                    VALUES ('${datos.lona_id}', '${datos.observaciones}', '${datos.lat}', '${datos.lon}', '${datos.agenda_id}');`,
        (error, result) => {
            if (!!error) {
                callback("Error al obtener datos de la base de datos " + error, false);
            } else  {
                callback({}, true);
            }
        });
};

lona_model.upload_image = (datos, callback) => {
    database.query(`UPDATE reporte_lona SET file_path = '${datos.path_file}' WHERE id = ${datos.id};`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, true);
            else
                callback(true, false);
        });
}

module.exports = lona_model;