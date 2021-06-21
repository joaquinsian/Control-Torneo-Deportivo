'use strict'

const mongoose = require("mongoose"); 
var Schema = mongoose.Schema;

var LigaSchema = Schema({
    nombre: String,
    image: String,
    creador: {type:Schema.Types.ObjectId, ref: 'usuario'}
});
 
module.exports = mongoose.model('liga', LigaSchema);
