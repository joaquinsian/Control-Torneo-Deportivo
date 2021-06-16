'use strict'

const mongoose = require("mongoose"); 
var Schema = mongoose.Schema;

var LigaSchema = Schema({
    nombre: String
});
 
module.exports = mongoose.model('liga', LigaSchema);
