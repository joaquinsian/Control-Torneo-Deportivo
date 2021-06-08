'use strict'
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    nombre: String,
    usuario: String,
    email: String,
    password: String,
    rol: String
}, {collection: 'usuario'})

module.exports = mongoose.model('usuario', UsuarioSchema)