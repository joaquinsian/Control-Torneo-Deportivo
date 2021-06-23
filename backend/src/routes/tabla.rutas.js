'use strict';
const express = require('express');
const tablaController = require('../controller/tabla.controller');

var api = express.Router();
api.get('/tablaCompleta', tablaController.tablaCompleta)
api.get('/obtenerTabla/:idTabla', tablaController.obtenerTabla)
api.put('/editarTabla/:idEquipo', tablaController.editarTabla)
api.put('/editarTablaId/:idTabla', tablaController.editarTablaId)

module.exports = api;