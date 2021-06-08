'use strict'
var jwt = require("jwt-simple");
var moment = require("moment");
var secret = 'Torneo_Deportivo';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        nombre: user.nombre,
        usuario: user.usuario,
        email: user.email,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().date(40, 'days').unix()
    }

    return jwt.encode(payload, secret)
}