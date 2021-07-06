 'use strict'
 //Variables globales
 const express = require("express");
 const app = express();
 const bodyParser = require("body-parser");
 const cors = require("cors")
 const morgan = require("morgan")

 //Cabeceras
 app.use(cors());

 //Importación de rutas
 const AdminApp_rutas = require("./src/routes/AdminApp.rutas")
 const Usuario_rutas = require("./src/routes/Usuario.rutas")
 const Login_rutas = require("./src/routes/Login.rutas")
 const Liga_rutas = require('./src/routes/Liga.rutas')
 const Equipo_rutas = require('./src/routes/Equipo.rutas')
 const Tabla_rutas = require('./src/routes/tabla.rutas')
 const Partidos_rutas = require('./src/routes/partidos.rutas')

 //Middlewares
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 app.use(morgan("dev"));

 app.use('/torneodeportivo', AdminApp_rutas)
 app.use('/torneodeportivo', Usuario_rutas)
 app.use('/torneodeportivo', Login_rutas)
 app.use('/torneodeportivo', Liga_rutas)
 app.use('/torneodeportivo', Equipo_rutas)
 app.use('/torneodeportivo', Tabla_rutas)
 app.use('/torneodeportivo', Partidos_rutas)

 //Exportar 
 module.exports = app;