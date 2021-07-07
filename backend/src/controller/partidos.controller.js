const Equipo = require('../models/equipo.model')
const Partidos = require('../models/partidos.model');
const Resultado_Partido = require("../models/resultado_partido.model")

//Función para generar los partidos
async function generarPartidos(req, res) {
    var idLiga = req.params.idLiga;
    var modelResultado = new Resultado_Partido();
    listadeequipos = await Equipo.find({ liga: idLiga })
    var arrayjornadas = [];
    var resultados = [];

    var count = 1;

    for (let x = 0; x < listadeequipos.length; x++) {
        for (let y = 0; y < x; y++) {
            if (x !== y) {
                arrayjornadas.push({ equipo_local: listadeequipos[x], equipo_visitante: listadeequipos[y], jornada: count });
                count++;
            }
        }
    }

    console.log(arrayjornadas)
    for (let x = 0; x < arrayjornadas.length; x++) {
        let partidos = new Partidos(arrayjornadas[x]);
        resultados.push(await partidos.save(),
        modelResultado.partido = partidos._id,
        modelResultado.marcador_equipo_local = 0,
        modelResultado.marcador_equipo_visitante = 0,
        modelResultado.save()
        );
    }

    res.json(resultados);
}

module.exports = {
    generarPartidos
}