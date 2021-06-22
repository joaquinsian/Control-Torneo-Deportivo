'use strict'
const Usuario = require("../models/usuario.model")
const bcrypt = require("bcrypt-nodejs");

//Función para crear el administrador por defecto
async function adminDefault(nombre, usuario, email, password, rol){
    var usuarioModel = new Usuario();

    if(nombre && usuario && email && password && rol){
        usuarioModel.nombre = nombre;
        usuarioModel.usuario = usuario;
        usuarioModel.email = email;
        usuarioModel.password = password;
        usuarioModel.rol = rol;

        await Usuario.find({$or: [
            {usuario: usuarioModel.usuario},
            {email: usuarioModel.email}
        ]}).exec((err, usuarioEncontrado)=>{
            if(err){
                console.log("Error en la petición");
            }else if(usuarioEncontrado && usuarioEncontrado.length >=1){
                console.log("El usuario es existente");
            }else{
                bcrypt.hash(usuarioModel.password, null, null, (err, passEncrypt)=>{
                    usuarioModel.password = passEncrypt;
                    await usuarioModel.save((err, userSave)=>{
                        if(err){
                            console.log("Error en la petición 2");
                        }else if(!userSave){
                            console.log("No se pudo guardar el usuario");
                        }else{
                            console.log(userSave);
                        }
                    })
                })
            }
        })
    }else{
        console.log("No ha ingresado todos los parámetros");
    }
}

module.exports = {
    adminDefault
}