'use strict'
const express = require("express");
const usuarioController = require("../controller/usuario.controller");
const md_autentication = require("../middlewares/authenticated")

//Rutas
var api = express.Router();
api.post('/registro', usuarioController.registro);
api.put("/editarUsuario/:idUsuario", usuarioController.editarUsuarioAdmin);
api.put('/editarRegistro/:idUsuario', md_autentication.ensureAuth, usuarioController.editarRegistro)
api.put("/convertirAdmin/:idUsuario", usuarioController.convertirAdmin)
api.delete('/eliminarRegistro/:idUsuario', md_autentication.ensureAuth, usuarioController.eliminarRegistro)
api.delete("/eliminarUsuario/:idUsuario", usuarioController.eliminarUsuario);
api.get('/obtenerUsuario/:idUsuario', usuarioController.obtenerUsuario);
api.get("/obtenerUsuarios", usuarioController.obtenerTodosLosUsuarios);
api.get("/obtenerUsuariosClientes", usuarioController.obtenerTodosLosUsuariosClientes);
api.get("/obtenerIdentidad", usuarioController.obtenerIdentidad);

module.exports = api;