// CALIFICACION CONTROLER
import { Request, Response } from 'express';
import { HistorialCalificacion} from './../Configuracion/sequelize';

const Sequelize=require('sequelize');
const Op = Sequelize.Op;
export var HCalificacionController = {

    createCalificacion: (req: Request, res: Response) => {
        const nHCalificacion = HistorialCalificacion.build(req.body);

        nHCalificacion.save().then((califCreada: any) => {
            if (califCreada) {
                res.status(200).json({
                    message: "created",
                    content: califCreada
                });
            } else {
                res.status(500).json({
                    message: "not created",
                    content: null
                });
            }
        }).catch((error:any)=>{
            res.status(500).json({
                message: "failed",
                content: error.original.sqlMessage
            });
        });
    },   
    getCalificacionUsuarioByTipoUsuario:(req: Request, res: Response)=>{
        let {usu_id,calif_perfil}=req.body;

        HistorialCalificacion.findAll({
            attributes: [['avg(calif_puntuacion)', 'Promedio']],
            where: {[Op.and]: [{usu_id: {[Op.eq]: usu_id}},{calif_perfil: {[Op.eq]: calif_perfil}} ]},
            }).then((respuesta:any)=>{
            if(respuesta){
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
                content: error.original.sqlMessage
            });
        });
    },  


}
