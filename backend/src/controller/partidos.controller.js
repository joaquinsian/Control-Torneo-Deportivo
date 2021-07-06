const Equipo = require('../models/equipo.model')
const Partidos = require('../models/partidos.model');
var mongoose = require('mongoose');

//Función para generar los partidos
async function generarPartidos(req, res) {
    var partidosModel = new Partidos();
    var idLiga = req.params.idLiga;
    // var Equipos = await Equipo.find({ liga: idLiga })
    var arrayjornadas = [];
    var listadeequipos = [mongoose.Types.ObjectId(),
        mongoose.Types.ObjectId(), mongoose.Types.ObjectId(),
        mongoose.Types.ObjectId(), mongoose.Types.ObjectId()
    ];
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
        resultados.push(await partidos.save());
    }

    res.json(resultados);

    /* if (Equipos && Equipos.length >= 2) {
        for (let x = 0; x < Equipos.length; x++) {
            for (let y = 0; y < x; y++) {
                if (x !== y) {
                    partidosModel.jornada = jornadas.push([Equipos[x], Equipos[y]]);
                    console.log("***************************************");
                    partidosModel.save((err, partidos) => {
                        if (err) {
                            console.log("Hubo error");
                            console.log(err)
                        } else if (!partidos) {
                            console.log(partidos);
                        } else {
                            console.log("Guardado");
                        }
                    })
                }
            }
        }
    } else {
        return res.status(500).send({ mensaje: "La liga no contiene los equipos suficientes para generar los partidos" })
    } */
}

module.exports = {
    generarPartidos
}