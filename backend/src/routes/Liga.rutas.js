'use strict'

const express = require("express");
const ligaController = require('../controller/liga.controller');

var autentication = require('../middlewares/authenticated');
var api = express.Router();

api.post('/crearLiga', autentication.ensureAuth ,ligaController.createLiga);
api.get('/mostrarLigas', ligaController.mostrarLigas);
api.get('/ligasUser/:idUsuario', autentication.ensureAuth, ligaController.ligasForUser)
api.get('/misLigas', autentication.ensureAuth, ligaController.misLigas)
api.get('/mostrarLigaID/:idLiga', ligaController.mostrarLigaID);
api.put('/editarLiga/:idLiga', ligaController.editarLiga);
api.delete('/eliminarLiga/:idLiga', ligaController.eliminarLiga);

module.exports = api;