const database = require('../database/psql-connection');
const reporte_lona_model = {};

reporte_lona_model.selectAll = (callback) => {
    database.query(`select rl.lona_id, lo.descripcion, lo.tamanio,
                    rl.agenda_id, ag.nombre, ag.direccion,
                    rl.observaciones, rl.file_path, rl.lat, rl.lon
                    from reporte_lona rl
                    inner join lona lo on lo.id = rl.lona_id
                    inner join agencia ag on  ag.id  = rl.agenda_id`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

reporte_lona_model.select = (datos, callback) => {
    database.query(`select lona_id, observaciones, file_path, lat, lon, agenda_id from reporte_lona WHERE id = '${datos.id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};


reporte_lona_model.selectByLona = (datos, callback) => {
    database.query(`select lona_id, observaciones, file_path, lat, lon, agenda_id from reporte_lona WHERE lona_id = '${datos.lona_id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

reporte_lona_model.selectByAgencia = (datos, callback) => {
    database.query(`select lona_id, observaciones, file_path, lat, lon, agenda_id from reporte_lona WHERE agenda_id = '${datos.agenda_id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

reporte_lona_model.insert = (datos, callback) => {
    database.query(`INSERT INTO reporte_lona(lona_id, observaciones, lat, lon, agenda_id)
                    VALUES ('${datos.lona_id}', '${datos.observaciones}', '${datos.lat}', '${datos.lon}', '${datos.agenda_id}');`,
        (error, result) => {
            if (!!error) {
                callback("Error al obtener datos de la base de datos " + error, false);
            } else  {
                database.query(`SELECT id FROM reporte_lona 
                                WHERE lona_id = '${datos.lona_id}'
                                AND observaciones = '${datos.observaciones}' 
                                AND lat = '${datos.lat}' AND lon = '${datos.lon}' 
                                AND agenda_id = '${datos.agenda_id}' `, (err,  result) => {
                    const id = result.rows[0].id;

                    let  i = 1;
                    for (let detalle of datos.reporte_detalle) {
                        database.query(`INSERT INTO reporte_detalle(estado_id, reporte_id)
                                        VALUES('${detalle.estado_id}',  '${id}')`, (err, result_detalle) => {
                            if (err) {
                                callback({}, false);
                            } else {
                                if (+(datos.reporte_detalle.length) === i) {
                                    callback({id}, true);
                                }
                            }
                            i++;
                        });
                    }
                });
            }
        });
};

reporte_lona_model.upload_image = (datos, callback) => {
    database.query(`UPDATE reporte_lona SET file_path = '${datos.path_file}' WHERE id = ${datos.id};`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, true);
            else
                callback(true, false);
        });
}

module.exports = reporte_lona_model;