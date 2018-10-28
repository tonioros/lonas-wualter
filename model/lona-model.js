const database = require('../database/psql-connection');
const lona_model = {};

lona_model.selectAll = (callback) => {
    database.query(`select id, descripcion, tamanio from lona`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            else
                callback(result.rows, true);
        });
};

lona_model.select = (datos, callback) => {
    database.query(`select id, descripcion, tamanio from lona WHERE id = '${datos.id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obten" +
                    "er datos de la base de datos " + error, false);

            database.query(`select es.nombre_estado, es.tipo_estado
                            from estado es
                            inner join lona_especificacion le on le.estado_id = es.id
                            where le.lona_id = ${datos.id}`, (error, detalle) => {
                const finalResult = {
                    ...result.rows[0],
                    detalle_lona: detalle.rows,
                };

                callback(finalResult, true);
            });

        });
};

lona_model.selectByAgencia = (datos, callback) => {
    database.query(`select ln.id, ln.descripcion, ln.tamanio from lona ln
                    inner join agencia_lona ag on ag.lona_id = ln.id
                    where ag.agenda_id = '${datos.id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            else
                callback(result.rows, true);
    });
};

lona_model.insert = (datos, callback) => {
    database.query(`INSERT INTO lona(descripcion, tamanio) VALUES ('${datos.descripcion}', '${datos.tamanio}');`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};


lona_model.update = (datos, callback) => {
    database.query(`UPDATE lona SET descripcion = '${datos.descripcion}', tamanio = '${datos.tamanio} 'WHERE id = '${datos.id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

lona_model.delete = (datos, callback) => {
    database.query(`DELETE FROM lona WHERE id = '${datos.id}'`,
        (error, result) => {
            if (!!error)
                callback("Error al obtener datos de la base de datos " + error, false);
            callback(result.rows, true);
        });
};

module.exports = lona_model;