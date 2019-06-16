// MENSAJE CONTROLER
import { Request, Response } from 'express';
import { Mensaje, Cita} from './../Configuracion/sequelize';

const Sequelize=require('sequelize');
const Op = Sequelize.Op;
export var MensajeController = {

    createMensaje: (req: Request, res: Response) => {
        const nMensaje = Mensaje.build(req.body);
            nMensaje.men_fecha=new Date();
            console.log(nMensaje);
            
        nMensaje.save().then((MensajeCreado: any) => {
            if (MensajeCreado) {
                res.status(200).json({
                    message: "created",
                    content: MensajeCreado
                });
            } else {
                res.status(500).json({
                    message: "not created",
                    content: null
                });
            }
            // Agregar aqui un socket
        }).catch((error:any)=>{
            res.status(500).json({
                message: "failed",
                content: error.original.sqlMessage
            });
        });
    },   
    getMensajeByIdCita:(req: Request, res: Response)=>{
        let {cita_id}=req.params;

        Mensaje.findAll({where:{cita_id}}).then((respuesta:any)=>{
            if(respuesta.length>0){
                res.status(200).json({
                    message: "ok",
                    content: respuesta
                });
            }else{
                res.status(500).json({
                    message: "not found",
                    content: null
                });
            }
        }).catch((error:any)=>{
            res.status(500).json({
                message: "failed",
                content: error
            });
        });
    },  


}
