// CALIFICACION CONTROLER
import { Request, Response } from 'express';
import { CategoriaProducto, Precio, UnidadMedida} from './../Configuracion/sequelize';

const Sequelize=require('sequelize');
const Op = Sequelize.Op;

export var CateogiraController = {

    createCategoria: (req: Request, res: Response) => {
        const nCateogira = CategoriaProducto.build(req.body);

        nCateogira.save().then((catCreada: any) => {
            if (catCreada) {
                res.status(200).json({
                    message: "created",
                    content: catCreada
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
    getCategorias:(req: Request, res: Response)=>{        

        CategoriaProducto.findAll({include:[{model:Precio}]}).then((respuesta:any)=>{
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