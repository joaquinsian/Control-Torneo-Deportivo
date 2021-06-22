"use strict";

const Liga = require("../models/liga.model");
const Equipo = require("../models/equipo.model")


// Create Liga
async function createLiga(req, res){
    var modeloliga = new Liga();
    var params = req.body;

    if (params.nombre){
        modeloliga.nombre = params.nombre;
        modeloliga.image = params.image;
        modeloliga.creador = req.user.sub;

        await Liga.find({$or: [
            {nombre: modeloliga.nombre},
            {image: modeloliga.image}
        ]}).exec((err, ligaEncontrada)=>{
            if(err){
                return res.status(500).send({mensaje: "Error en la petición"})
            }else if(ligaEncontrada && ligaEncontrada.length >= 1){
                return res.status(500).send({mensaje: "Liga Existente!"})
            }else{
                modeloliga.save((err,ligaSave)=>{
                    if(err){
                        return res.status(500).send({mensaje: "Error en la petición"})
                    }else if(!ligaSave){
                        return res.status(500).send({mensaje: "No se ha podido guardar la liga"})
                    }else{
                        return res.status(200).send({ligaSave})
                    }
                })
            }
        })
    }
} 

//mostrar ligas
async function mostrarLigas(req, res){
    await Liga.find().populate('creador', 'nombre email').exec((err, ligas)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!ligas){
            return res.status(500).send({mensaje: "No se han podido obtener las ligas"})
        }else{
            return res.status(200).send({ligas})
        }
    })
}

//Mostrar ligas por el id de usuario
async function ligasForUser(req, res){
    if(req.user.rol === "Admin_App"){
        var idUsuario = req.params.idUsuario;

        await Liga.find({creador: idUsuario}).populate('creador', 'nombre email').exec((err, ligasUser)=>{
            if(err){
                return res.status(500).send({mensaje: "Error en la petición"})
            }else if(!ligasUser){
                return res.status(500).send({mensaje: "No se han podido obtener las ligas"})
            }else{
                return res.status(200).send({ligasUser})
            }
        })
    }else{
        return res.status(500).send({mensaje: "No tiene el rol de autirización"})
    }
}

//Mostrar mis ligas (del usuario que este logeado)
async function misLigas(req, res){
    await Liga.find({creador: req.user.sub}).populate('creador', 'nombre email').exec((err,misLigas)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!misLigas){
            return res.status(500).send({mensaje: "No se han podido obtener las ligas"})
        }else{
            return res.status(200).send({misLigas})
        }
    })
}

//mostrar liga por Id
async function mostrarLigaID(req, res){
    var idLiga = req.params.idLiga;

    await Liga.findById(idLiga).populate('creador', 'nombre email').exec((err, liga)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!liga){
            return res.status(500).send({mensaje: "No se ha podido obtener la liga"})
        }else{
            return res.status(200).send({liga})
        }
    })
}

//Mostrar equipos por liga
async function equiposLiga(req, res){
    var idLiga = req.params.idLiga;

    await Equipo.find({liga: idLiga}).populate('liga', 'nombre').exec((err, equipos)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!equipos){
            return res.status(500).send({mensaje: "No se han podido obtener los equipos"})
        }else{
            return res.status(200).send({equipos})
        }
    })
}

//editar liga
async function editarLiga(req, res){
    var idLiga = req.params.idLiga;
    var params = req.body;

    await Liga.findByIdAndUpdate(idLiga, params, {new: true}, (err, ligaEditada)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!ligaEditada){
            return res.status(500).send({mensaje: "No se ha podido editar la liga"})
        }else{
            return res.status(200).send({ligaEditada})
        }
    })
}

//Función para eliminar la liga
async function eliminarLiga(req, res){
    var idLiga = req.params.idLiga;

    await Liga.findByIdAndDelete(idLiga, (err, ligaDelete)=>{
        if(err){
            return res.status(500).send({mensaje: "Error en la petición"})
        }else if(!ligaDelete){
            return res.status(500).send({mensaje: "No se ha podido eliminar la liga"})
        }else{
            return res.status(200).send({ligaDelete})
        }
    })
}


module.exports = {
    createLiga,
    mostrarLigas,
    misLigas,
    ligasForUser,
    mostrarLigaID,
    equiposLiga,
    editarLiga,
    eliminarLiga
}


