'use strict';

const Equipo = require('../models/equipo.model');
const Tabla = require('../models/tabla.model');

//crear equipo
async function createEquipo(req, res){
    var modeloEquipo = new Equipo();
    var modeloTabla = new Tabla();
    var params = req.body;
    var cupoLiga = await Equipo.find({liga: params.liga})

    if(cupoLiga.length >= 10){
        return res.status(500).send({mensaje: "La liga ha alcanzado el total de equipos"})
    }else{
        if(params.nombre){
            modeloEquipo.nombre = params.nombre;
            modeloEquipo.imagen = params.imagen;
            modeloEquipo.liga = params.liga;

            await Equipo.find({$or: [
                {nombre: modeloEquipo.nombre},
                {imagen: modeloEquipo.imagen}
            ]}).exec((err, equipo)=>{
                if(err){
                    return res.status(500).send({mensaje: "Error en la petición"})
                }else if(equipo && equipo.length >= 1){
                    return res.status(500).send({mensaje: "El equipo es existente!"})
                }else{
                    modeloEquipo.save((err, equipoSave)=>{
                        if(err){
                            return res.status(500).send({mensaje: "Error en la petición"})
                        }else if(!equipoSave){
                            return res.status(500).send({mensaje: "No se ha podido almacenar el equipo"})
                        }else{
                            modeloTabla.equipo = equipoSave._id;
                            modeloTabla.puntaje = 0;
                            modeloTabla.partidos_jugados = 0;
                            modeloTabla.partidos_ganados = 0;
                            modeloTabla.partidos_empatados = 0;
                            modeloTabla.partidos_perdidos = 0;
                            modeloTabla.goles_a_favor = 0;
                            modeloTabla.goles_en_contra = 0;
                            modeloTabla.save((err, tablaSave)=>{
                                if(err){
                                    return res.status(500).send({mensaje: "Error en la petición"})
                                }else if(!tablaSave){
                                    return res.status(500).send({mensaje: "No se ha podido agregar el equipo a la tabla"})
                                }else{
                                    console.log(tablaSave);
                                }
                            });
                            return res.status(200).send({equipoSave})
                        }
                    })
                }
            })
        }else{
            return res.status(500).send({mensaje: "No ha completado todos los parámetros"})
        }
    }
}

//mostrar equipos
async function mostrarEquipos(req, res){
    await Equipo.find().populate('liga','nombre').exec((err, equipos)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!equipos){
            return res.status(500).send({mensaje: "No se han podido obtener los equipos"})
        }else{
            return res.status(200).send({equipos})
        }
    })
}

//Función para obtener equipos por id
async function equipoId(req, res){
    var idEquipo = req.params.idEquipo;

    await Equipo.findById(idEquipo).populate('liga', 'nombre').exec((err, equipo)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!equipo){
            return res.status(500).send({mensaje: "No se ha podido obtener el equipo"})
        }else{
            return res.status(200).send({equipo})
        }
    })
}

//Función para editar el equipo
async function editarEquipo(req, res){
    var idEquipo = req.params.idEquipo;
    var params = req.body;

    await Equipo.findByIdAndUpdate(idEquipo, params, {new: true}, (err, equipoEditado)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!equipoEditado){
            return res.status(500).send({mensaje: "No se ha podido editar el equipo"})
        }else{
            return res.status(200).send({equipoEditado})
        }
    })
}

//Función para eliminar un equipo
async function eliminarEquipo(req, res){
    var idEquipo = req.params.idEquipo;

    await Equipo.findByIdAndDelete(idEquipo, (err, equipoEliminado)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!equipoEliminado){
            return res.status(500).send({mensaje: "No se ha podido eliminar el equipo"})
        }else{
            Tabla.findOneAndDelete({equipo: idEquipo}, (err, deleteTabla)=>{
                if(err){
                    console.log(err);
                }else if(!deleteTabla){
                    console.log(deleteTabla);
                }else{
                    console.log(deleteTabla);
                }
            })
            return res.status(200).send({equipoEliminado})
        }
    })
}

module.exports = {
    createEquipo,
    mostrarEquipos,
    equipoId,
    editarEquipo,
    eliminarEquipo
}