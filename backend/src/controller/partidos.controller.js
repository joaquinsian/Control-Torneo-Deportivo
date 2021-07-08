const Equipo = require('../models/equipo.model')
const Partidos = require('../models/partidos.model');
const Resultado_Partido = require("../models/resultado_partido.model");
const mongoose = require("mongoose");

//Función para generar los partidos
async function generarPartidos(req, res) {
    var idLiga = req.params.idLiga;
    let numerodepartidosporjornada = 0;
    var modelResultado = new Resultado_Partido();
    let listadeequipos = await Equipo.find({ liga: idLiga });
    var arrayjornadas = [];
    var resultados = [];

    var count = 1;
    let count2 = 1;

    if (listadeequipos.length % 2 == 0) {
        numerodepartidosporjornada = Number(listadeequipos.length / 2)
    } else {
        numerodepartidosporjornada = Number((listadeequipos.length + 1) / 2)
    }

    for (let x = 0; x < listadeequipos.length; x++) {
        for (let y = 0; y < x; y++) {
            if (x !== y) {
                arrayjornadas.push({ equipo_local: listadeequipos[x], equipo_visitante: listadeequipos[y], jornada: count2 });
                if (count === numerodepartidosporjornada) {
                    count = 1;
                    count2++;
                } else {
                    count++;
                }
            }
        }
    }

    for (let x = 0; x < arrayjornadas.length; x++) {
        let partidos = new Partidos(arrayjornadas[x]);
        partidos.save(),
            modelResultado = new Resultado_Partido();
        modelResultado.partido = partidos._id,
            modelResultado.marcador_equipo_local = null,
            modelResultado.marcador_equipo_visitante = null,
            modelResultado.save((err, resultado) => {
                if (err) {
                    console.error(err)
                    return res.status(500).send({ mensaje: "Error en la petición" })
                } else if (!resultado) {
                    return res.status(500).send({ mensaje: "No se ha podido almacenar el resultado" })
                } else {
                    console.log("Resultado almacenado");
                }
            })
    }

    res.status(200).json({ mensaje: "Datos Guardados" })
}

//Función para obtener los partidos
async function obtenerPartidos(req, res) {
    var idLiga = req.params.idLiga;
    var Equipos = await Equipo.find({ liga: idLiga })
    await Partidos.find({ equipo_local: Equipos }, { equipo_visitante: Equipos }).populate('equipo_local equipo_visitante', 'nombre imagen liga').exec((err, partidos) => {
        if (err) {
            return res.status(500).send({ mensaje: "Error en la petición" })
        } else if (!partidos) {
            return res.status(500).send({ mensaje: "No se han podido obtener los partidos" })
        } else {
            return res.status(200).send(partidos)
        }
    })
}

module.exports = {
    generarPartidos,
    obtenerPartidos
}