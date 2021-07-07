'use strict';
const Resultado_Partido = require('../models/resultado_partido.model')
const Tabla = require('../models/tabla.model')
const Partido = require('../models/partidos.model')

//Función para agregar el marcador
async function agregarMarcador(req, res){
    var idPartido = req.params.idPartido;
    var params = req.body;
    var partido = await Partido.findById(idPartido, (err)=>{if(err){return res.status(500).send({ mensaje: "Verifique el id del partido"})}}); // Se obtiene el id del equipo
    var marcador = await Resultado_Partido.findOne({partido: idPartido}, (err)=>{if(err){return res.status(500).send({ mensaje: "Error al obtener el marcador"})}}) //Se saca el id del marcador de partido


    await Tabla.findOneAndUpdate({equipo: partido.equipo_local}, {partidos_jugados: +1})
    await Tabla.findOneAndUpdate({equipo: partido.equipo_visitante}, {partidos_jugados: +1})


    await Resultado_Partido.findByIdAndUpdate(marcador._id, params, {new: true}, (err, resultadoActualizado)=>{
        if(err){
            return res.status(500).send({ mensaje: "Error en la petición"})
        }else if(!resultadoActualizado){
            return res.status(500).send({ mensaje: "No se ha podido Agregar el Marcador"})
        }else{
            res.json(resultadoActualizado)
        }
    })
    if(params.marcador_equipo_local > params.marcador_equipo_visitante){
        await Tabla.findOneAndUpdate({equipo: partido.equipo_local}, {puntaje: +3, partidos_ganados: +1, goles_a_favor: + params.marcador_equipo_local, goles_en_contra: - params.marcador_equipo_visitante})
        await Tabla.findOneAndUpdate({equipo: partido.equipo_visitante}, {partidos_perdidos: +1, goles_a_favor: + params.marcador_equipo_visitante, goles_en_contra: - params.marcador_equipo_local})
        console.log("Ganó el equipo local");
    }else if(params.marcador_equipo_visitante > params.marcador_equipo_local){
        await Tabla.findOneAndUpdate({equipo: partido.equipo_visitante}, {puntaje: +3, partidos_ganados: +1, goles_a_favor: + params.marcador_equipo_visitante, goles_en_contra: - params.marcador_equipo_local})
        await Tabla.findOneAndUpdate({equipo: partido.equipo_local}, {partidos_perdidos: +1, goles_a_favor: + params.marcador_equipo_local, goles_en_contra: - params.marcador_equipo_visitante})
        console.log("Gano el equipo visitante");
    }else if(params.marcador_equipo_local === params.marcador_equipo_visitante){
        await Tabla.findOneAndUpdate({equipo: partido.equipo_local}, {puntaje: +1, partidos_empatados: +1, goles_a_favor: + params.marcador_equipo_local, goles_en_contra: - params.marcador_equipo_visitante})
        await Tabla.findOneAndUpdate({equipo: partido.equipo_visitante}, {puntaje: +1, partidos_empatados: +1, goles_a_favor: + params.marcador_equipo_visitante, goles_en_contra: - params.marcador_equipo_local})
        console.log("Hubo un empate");
    }

}


module.exports = {
    agregarMarcador
}