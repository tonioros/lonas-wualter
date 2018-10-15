const {Pool} = require('pg');

const pool = new Pool({
    user: 'gfcrimzwpnopxy',
    host: 'ec2-184-72-234-230.compute-1.amazonaws.com',
    database: 'd8riqluelfoohh',
    password: '104bb503475a7f173a1565ffedac31b3f572ae98b7dd0e4f88b71625ab49e66c',
    port: 5432,
    ssl: true,
});

pool.connect()
    .catch((ex) => {
        console.trace(ex);
        console.log(ex.message);
    });


module.exports = pool;