'use strict'

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EquipoSchema = Schema({
    nombre: String,
    imagen: String,
    ligaId: { type: Schema.ObjectId, ref: "liga" }
});

module.exports = mongoose.model('equipo', EquipoSchema); 