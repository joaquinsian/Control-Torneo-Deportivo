'use strict'
var Tabla = require('../models/tabla.model')

//Función para obtener tabla por Id
async function obtenerTabla(req, res){
    var idTabla = req.params.idTabla;

    await Tabla.findById(idTabla).populate('equipo', 'nombre').exec((err, tabla)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!tabla){
            return res.status(500).send({mensaje: "No se ha podido obtener la tabla"})
        }else{
            return res.status(200).send({tabla})
        }
    })
}

//Función para editar la tabla por id de equipo
async function editarTabla(req, res){
    var idEquipo = req.params.idEquipo;
    var params = req.body;

    await Tabla.findOneAndUpdate({equipo: idEquipo}, params, {new: true}, (err, tablaEditada)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!tablaEditada){
            return res.status(500).send({mensaje: "No se ha podido editar la tabla"})
        }else{
            return res.status(200).send({tablaEditada})
        }
    })
}

//Función para editar la tabla por id de tabla
async function editarTablaId(req, res){
    var idTabla = req.params.idTabla
    var params = req.body;

    delete params.equipo;

    await Tabla.findByIdAndUpdate(idTabla, params, {new: true}, (err, tablaEditada)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!tablaEditada){
            return res.status(500).send({mensaje: "No se ha podido editar la tabla"})
        }else{
            return res.status(200).send({tablaEditada})
        }
    })
}

module.exports = {
    obtenerTabla,
    editarTabla,
    editarTablaId
}