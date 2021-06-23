'use strict'
var Tabla = require('../models/tabla.model')

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

module.exports = {
    editarTabla
}