'use strict'
const express = require("express");
const partidosController = require("../controller/partidos.controller")

var api = express.Router();
api.get('/generarPartidos/:idLiga', partidosController.generarPartidos)

module.exports = api;