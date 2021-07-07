'use strict';
const express = require('express');
const resultadoController = require('../controller/resultado_partido.controller')

var api = express.Router();
api.put('/agregarMarcador/:idPartido', resultadoController.agregarMarcador)


module.exports = api;