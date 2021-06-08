'use strict'
//Variables globales
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")

//Cabeceras
app.use(cors());

//Importación de rutas
const AdminApp_rutas = require("./src/routes/AdminApp.rutas")
const Usuario_rutas = require("./src/routes/Usuario.rutas")
const Login_rutas = require("./src/routes/Login.rutas")

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/torneodeportivo', AdminApp_rutas)
app.use('/torneodeportivo', Usuario_rutas)
app.use('/torneodeportivo', Login_rutas)

//Exportar
module.exports = app;