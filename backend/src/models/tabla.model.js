'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TablaSchema = Schema({
    equipo: {type: Schema.Types.ObjectId, ref: 'equipo'},
    puntaje: Number,
    partidos_jugados: Number,
    partidos_ganados: Number,
    partidos_empatados: Number,
    partidos_perdidos: Number,
    goles_a_favor: Number,
    goles_en_contra: Number,
}, {collection: 'tabla'})

module.exports = mongoose.model('tabla', TablaSchema);