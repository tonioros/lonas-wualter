/**
 * API Routes
 *
 * Declara rutas para API.
 * Todos los End Points deberan de ser declarados
 * dentro de este archivo.
 * Al estar dentro de este archivo de Routes, ira
 * bajo el End Point
 * <b>/api/v1/</b>
 *
 * @type {createApplication}
 */
const express = require('express');
const router = express.Router();

const usuario_routes = require('./usuarios-route');
const estado_routes = require('./estado-route');
const agencia_routes = require('./agencia-route');
const lona_routes = require('./lona-route');
const reporte_lona_routes = require('./reporte-lona-route');

router.use('/usuarios', usuario_routes);
router.use('/estados', estado_routes);
router.use('/agencias', agencia_routes);
router.use('/lonas', lona_routes);
router.use('/reporte-lonas', reporte_lona_routes);

module.exports = router;
