'use strict'
const express = require("express");
const usuarioController = require("../controller/usuario.controller");
const md_autentication = require("../middlewares/authenticated")

//Rutas
var api = express.Router();
api.post('/registro', usuarioController.registro);
api.put('/editarRegistro/:idUsuario', md_autentication.ensureAuth, usuarioController.editarRegistro)
api.delete('/eliminarRegistro/:idUsuario', md_autentication.ensureAuth, usuarioController.eliminarRegistro)
api.get('/obtenerUsuario/:idUsuario', usuarioController.obtenerUsuario)

module.exports = api;