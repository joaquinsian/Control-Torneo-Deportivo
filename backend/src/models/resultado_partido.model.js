'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ResultadoPartidoSchema = Schema({
    partido: {type: Schema.Types.ObjectId, ref: 'partidos'},
    marcador_equipo_local: Number,
    marcador_equipo_visitante: Number
})

module.exports = mongoose.model('resultados', ResultadoPartidoSchema)