"use strict";

const Liga = require("../models/liga.model");


// Create Liga
function createLiga(req, res){
    var modeloliga = new Liga();
    var params = req.body;

    if (params.nombre){
        modeloliga.nombre = params.nombre;
        modeloliga.image = params.image;
        modeloliga.creador = req.user.sub;

        Liga.find({$or: [
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

//mostrar liga
function mostrarLiga(req, res){
    //el find retorna un array
    Liga.find((err, ligaEncontrada)=>{
        if(err) return res.status(400).send({ mensaje: 'Error en la petición'})
        if(!ligaEncontrada) return res.status(400).send({ mensaje: 'Error en la consulta' })
        return res.status(200).send({ ligaEncontrada})
    })

}

//mostrar liga por Id
function mostrarLigaID(req, res){
    var idLiga = req.params.idLiga
    Liga.findById(idLiga, (err, ligaEncontrada)=>{
        if(err) return res.status(400).send({mensaje:'Error en obtener la liga'})
        if(!ligaEncontrada) return res.status(400).send({ mensaje: 'Error al obtener los datos de la liga'})
        return res.status(200).send({ ligaEncontrada })

    })

}

//editar liga
function editarLiga(req, res){
    var idLiga = req.params.idLiga;
    var params = req.body;
   

    Liga.findByIdAndUpdate(idLiga, params, { new: true }, (err, ligaActualizada)=>{
        if(err) return res.status(400).send({ mensaje: 'Error en la petición '});
        if(!ligaActualizada) return res.status(500).send({ mensaje: 'No se ha podido actualizar la liga'});
        return res.status(200).send({ ligaActualizada });
    })
  

}


function eliminarLiga(req, res){
    const idLiga =req.params.idLiga;


    Liga.findByIdAndDelete(idLiga, (err, ligaEliminada)=>{
        if(err) return res.status(400).send({ mensaje: 'Error en la petición de eliminar '});
        if(!ligaEliminada) return res.status(200).send({ ligaEliminada });

       
    })

}


module.exports = {
    createLiga,
    mostrarLiga,
    mostrarLigaID,
    editarLiga,
    eliminarLiga
}


