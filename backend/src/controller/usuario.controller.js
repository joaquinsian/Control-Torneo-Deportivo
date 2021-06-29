'use strict'
const Usuario = require("../models/usuario.model")
const bcrypt = require("bcrypt-nodejs");

//Función de registro
async function registro(req, res) {
    var usuarioModel = new Usuario();
    var params = req.body;
    if (params.nombre && params.usuario && params.email) {
        usuarioModel.nombre = params.nombre;
        usuarioModel.usuario = params.usuario;
        usuarioModel.email = params.email;
        usuarioModel.rol = "Rol_Cliente"

        await Usuario.find({
            $or: [
                { usuario: usuarioModel.usuario },
                { email: usuarioModel.email }
            ]
        }).exec((err, usuarioEncontrado) => {
            if (err) {
                return res.status(500).send({ mensaje: "Error en la petición" })
            } else if (usuarioEncontrado && usuarioEncontrado.length >= 1) {
                return res.status(500).send({ mensaje: "El usuario es existente" })
            } else {
                bcrypt.hash(params.password, null, null, (err, passEncrypt) => {
                    usuarioModel.password = passEncrypt;
                    usuarioModel.save((err, userSave) => {
                        if (err) {
                            return res.status(500).send({ mensaje: "Error en la petición 2" })
                        } else if (!userSave) {
                            return res.status(500).send({ mensaje: "Error al guardar el registro" })
                        } else {
                            return res.status(200).send({ userSave })
                        }
                    })
                })
            }
        })
    } else {
        console.log("No ha ingresado todos los parámetros");
        return res.status(500).send({ mensaje: "No ha ingresado todos los parámetros" })
    }
}

//Función para editar el usuario
async function editarRegistro(req, res) {
    var idUsuario = req.params.idUsuario;
    var params = req.body;
    if (req.user.sub != idUsuario) {
        return res.status(500).send({ mensaje: "No tiene la autorización para editar el usuario" })
    } else {
        delete params.password;
        await Usuario.findByIdAndUpdate(idUsuario, params, { new: true }, (err, usuarioEditado) => {
            if (err) {
                return res.status(500).send({ mensaje: "Error en la petición" })
            } else if (!usuarioEditado) {
                return res.status(500).send({ mensaje: "No se ha podido editar el registro" })
            } else {
                return res.status(200).send({ usuarioEditado })
            }
        })
    }
}

//Función para eliminar el usuario
async function eliminarRegistro(req, res) {
    var idUsuario = req.params.idUsuario;
    if (req.user.sub != idUsuario) {
        return res.status(500).send({ mensaje: "No tiene el rol de autorización para eliminar el registro" })
    } else {
        await Usuario.findByIdAndDelete(idUsuario, (err, usuarioEliminado) => {
            if (err) {
                return res.status(500).send({ mensaje: "Error en la petición" })
            } else if (!usuarioEliminado) {
                return res.status(500).send({ mensaje: "No se pudo eliminar el registro" })
            } else {
                return res.status(200).send({ usuarioEliminado })
            }
        })
    }
}

//Función para obtener un usuario por id
async function obtenerUsuario(req, res) {
    var idUsuario = req.params.idUsuario;
    await Usuario.findById(idUsuario, (err, usuarioEncontrado) => {
        if (err) {
            return res.status(500).send({ mensaje: "Error en la petición" })
        } else if (!usuarioEncontrado) {
            return res.status(500).send({ mensaje: "No se pudo obtener el registro" })
        } else {
            return res.status(200).send({ usuarioEncontrado })
        }
    })
}

async function obtenerTodosLosUsuarios(req, res) {
    await Usuario.find()
        .then(doc => res.status(200).json(doc))
        .catch(err => console.error(err));
}

module.exports = {
    registro,
    editarRegistro,
    eliminarRegistro,
    obtenerUsuario,
    obtenerTodosLosUsuarios
}