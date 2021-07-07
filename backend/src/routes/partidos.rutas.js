'use strict'
const express = require("express");
const partidosController = require("../controller/partidos.controller")

var api = express.Router();
api.get('/generarPartidos/:idLiga', partidosController.generarPartidos)
api.get('/obtenerPartidos/:idLiga', partidosController.obtenerPartidos)

module.exports = api;