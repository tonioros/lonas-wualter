const express = require('express');
const router = express.Router();
const usuario_routes = require('./usuarios-route');
const estado_routes = require('./estado-route');
const agencia_routes = require('./agencia-route');
const lona_routes = require('./lona-route');

router.use('/usuarios', usuario_routes);
router.use('/estados', estado_routes);
router.use('/agencias', agencia_routes);
router.use('/lonas', lona_routes);

module.exports = router;
