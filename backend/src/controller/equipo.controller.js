'use strict';

const Equipo = require('../models/equipo.model');

//crear equipo

function createEquipo(req, res){
    var modeloEquipo = new Equipo();
    var params = req.body;

    if (params.nombre){
        modeloEquipo.nombre = params.nombre;
        modeloEquipo.imagen = params.imagen;
                
        Equipo.find({ $or: [
            { nombre: modeloEquipo.nombre},
        ]}).exec((err, equipoEncontrado)=>{
            if(err) return res.status (400).send ({ mensaje: 'error en la petición'})
            
            if (equipoEncontrado && equipoEncontrado.length >= 1) {
                return res.status(400).send({ mensaje: 'El equipo ya existe'})
            } else {


                    modeloEquipo.save((err, equipoGuardado) =>{
                        if (err) return res.status(400).send({ mensaje: 'Error al gurdar el equipo'})

                        if (equipoGuardado){
                            res.status(200).send(equipoGuardado)
                        }else{
                            res.status(400).send({ mensaje: 'no se ha podido guardar el equipo'})
                        }
                    })
                

            }

        })

    } 

} 

//mostrar equipo

function mostrarEquipo(req, res){
  

    Equipo.find().populate('liga').exec((err, equipoEncontrado) => {
        if(err) return res.status(400).send({ mensaje: 'Error en la petición'})
        if(!equipoEncontrado)return res.status(400).send({ mensaje: 'Error en la consulta' })
        return res.status(200).send({ equipoEncontrado })
    })

}


module.exports = {
    createEquipo,
    mostrarEquipo

}