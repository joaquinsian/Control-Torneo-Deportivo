'use strict'
const Usuario = require("../models/usuario.model");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt")

//Función para logear
async function login(req, res){
    var params = req.body;
    await Usuario.findOne({email: params.email}, (err, userSee)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"} )
        }else if(userSee){
            bcrypt.compare(params.password, userSee.password, (err, passCorrect)=>{
                if(passCorrect){
                    if(params.getToken === "true"){
                        return res.status(200).send({token: jwt.createToken(userSee)});
                    }else{
                        userSee.password = undefined;
                        return res.status(200).send({userSee})
                    }
                }else{
                    return res.status(500).send({mensaje: "El usuario no se ha podido identificar"})
                } 
            })
        }else{
            return res.status(500).send({mensaje: "El usuario no ha podido ingresar"})
        }
    })
}

module.exports = {
    login
}