'use strict'
const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var PartidosSchema = Schema({
    equipo_local: {type: Schema.Types.ObjectId, ref: 'equipo'},
    equipo_visitante: {type: Schema.Types.ObjectId, ref: 'equipo'},
    jornada: Number
})

module.exports = mongoose.model('partidos', PartidosSchema)