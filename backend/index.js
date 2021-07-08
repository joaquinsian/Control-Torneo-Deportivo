'use strict'

const mongoose = require("mongoose");
const app = require("./app")
const addAdmin = require("./src/controller/AdminApp.controller") 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://uxf2ag95mcuwpjafmksq:RfLuFtyR5884QPFpIYRh@bjlqz8dnveitfqk-mongodb.services.clever-cloud.com:27017/bjlqz8dnveitfqk', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{
    console.log("Se encuentra conectado a la base de datos");

    createAdminApp();
         
    app.set("port", 3000 || process.env.PORT)
    
    app.listen(app.get("port"), function(){
        console.log("Está funcionando en el puerto 3000");
    })
}).catch(err => console.log(err));

//Admin por defaul
const createAdminApp = () =>{
    addAdmin.adminDefault("Admin","ADMIN","admin@kinal.edu.gt","deportes123","Admin_App");
}
