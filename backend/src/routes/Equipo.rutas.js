'use strict';

const express = require("express");
const equipoController = require('../controller/equipo.controller')

var api = express.Router();

api.post('/crearEquipo', equipoController.createEquipo);
api.get('/mostrarEquipos', equipoController.mostrarEquipos);
api.get('/equipoId/:idEquipo', equipoController.equipoId);
api.get("/equiposPorLiga/:idLiga", equipoController.equiposPorLiga);
api.put('/editarEquipo/:idEquipo', equipoController.editarEquipo);
api.delete('/eliminarEquipo/:idEquipo', equipoController.eliminarEquipo)

module.exports = api;