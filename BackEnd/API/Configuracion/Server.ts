import {sequelize} from './../Configuracion/sequelize';
import express from 'express';
import {Request,Response,NextFunction} from 'express'

// Importando Rutas de API
import {UsuarioRouter} from './../Routes/usuario'
import { PublicacionRouter } from '../Routes/publicacion';

export default class Server{

    public app:express.Application;
    public PUERTO;

    constructor(){
        this.app=express();
        this.PUERTO=process.env.PORT || 3700;
        this.ConfigurarBodyPArser();
        this.configurarCORS();
        this.asignarRutas();         
    }
        
    // config BodyPArser
    ConfigurarBodyPArser(){
        var BodyPArser=require('body-parser');
        this.app.use(BodyPArser.urlencoded({extended:false}));
        this.app.use(BodyPArser.json());
    }

    configurarCORS(){
        this.app.use((req:Request,res:Response,next:NextFunction)=>{
            //Reglas
            res.header('Access-Control-Allow-Origin','*');            
            res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
            res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
            res.header('Allow','GET,POST,PUT,DELETE');
            next();
        });
    } 


    asignarRutas(){
        this.app.use('/api',UsuarioRouter);
        this.app.use('/api',PublicacionRouter);
        // this.app.get('/',(req:Request,res:Response)=>{
        //     res.send("Holas");
        // });
    }

    IniciarServidor(){
        let port=this.PUERTO;
        this.app.listen(port,function(){
            console.log(`Servidor corriendo en el puerto ${port}` ); 

                sequelize.sync({force:false}).then(()=>{
                    console.log('Base de datos creada con exito');    
                }).catch((error:any)=>{
                    console.log("Error ...... "+error);
                });
        });
    }
}

