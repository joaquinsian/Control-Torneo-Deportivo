'use strict'
const mongoose = require("mongoose");
const app = require("./app")
const addAdmin = require("./src/controller/AdminApp.controller")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/torneodeportivo', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{
    console.log("Se encuentra conectado a la base de datos");

    createAdminApp();

    app.listen(3000, function(){
        console.log("Está funcionando en el puerto 3000");
    })
}).catch(err => console.log(err));

//Admin por defaul
const createAdminApp = () =>{
    addAdmin.adminDefault("Jorge Morataya","jmorataya","jmorataya@kinal.edu.gt","12345678","Admin_App");
}