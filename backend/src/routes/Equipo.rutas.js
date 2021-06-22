'use strict';

const express = require("express");
const equipoController = require('../controller/equipo.controller')

var api = express.Router();

api.post('/crearEquipo', equipoController.createEquipo);
api.get('/mostrarEquipos', equipoController.mostrarEquipos)

module.exports = api;