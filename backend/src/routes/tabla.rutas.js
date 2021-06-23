'use strict';
const express = require('express');
const tablaController = require('../controller/tabla.controller');

var api = express.Router();
api.get('/obtenerTabla/:idTabla', tablaController.obtenerTabla)
api.put('/editarTabla/:idEquipo', tablaController.editarTabla)

module.exports = api;