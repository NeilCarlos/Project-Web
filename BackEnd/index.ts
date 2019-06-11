import Server from './API/Configuracion/Server';
let servidor=new Server();
servidor.IniciarServidor();



// import {sequelize} from './API/Configuracion/sequelize';

// var express=require('express');
// var bodyParser=require('body-parser');

// /**
//  * Creando la referencia a Express
//  */
// var app=express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const PUERTO=process.env.port || 3000;

// // para levantar el servidor web
// app.listen(PUERTO,function(){
//     console.log("Servidor corriendo en el puerto 3000");        
//         sequelize.sync({force:true}).then(()=>{
//             console.log('Base de datos creada con exito');    
//         }).catch((error:any)=>{
//             console.log("Error ...... "+error);
//         });
// });
