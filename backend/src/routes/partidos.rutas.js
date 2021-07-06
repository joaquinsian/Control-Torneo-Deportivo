'use strict'
const express = require("express");
const partidosController = require("../controller/partidos.controller")

var api = express.Router();
api.post('/generarPartidos/:idLiga', partidosController.generarPartidos)

module.exports = api;