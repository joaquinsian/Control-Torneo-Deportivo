'use strict'

const express = require("express");
const ligaController = require('../controller/liga.controller');

var autentication = require('../middlewares/authenticated');
var api = express.Router();

api.post('/crearLiga', autentication.ensureAuth ,ligaController.createLiga);
api.get('/mostrarLiga', ligaController.mostrarLiga);
api.get('/mostrarLigaID/:idLiga', ligaController.mostrarLigaID);
api.put('/editarLiga/:idLiga', autentication.ensureAuth , ligaController.editarLiga);
api.delete('/eliminarLiga/:idLiga', autentication.ensureAuth, ligaController.eliminarLiga);

module.exports = api;