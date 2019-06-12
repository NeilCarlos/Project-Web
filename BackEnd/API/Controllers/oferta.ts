// OFERTA CONTROLER
import { Request, Response } from 'express';
import { Oferta} from './../Configuracion/sequelize';

const Sequelize=require('sequelize');
const Op = Sequelize.Op;
export var OfertaController = {

    createOferta: (req: Request, res: Response) => {
        const noferta = Oferta.build(req.body);

        noferta.save().then((OfertaCreada: any) => {
            if (OfertaCreada) {
                res.status(200).json({
                    message: "created",
                    content: OfertaCreada
                });
            } else {
                res.status(500).json({
                    message: "not created",
                    content: null
                });
            }
        });
    },   
    getOfertasByIdPublicacion:(req: Request, res: Response)=>{
        let {publi_id}=req.params;

        Oferta.findAll({where:{publi_id:publi_id},order:[['ofer_precio_oferta', 'DESC']] }).then((respuesta:any)=>{
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
        });
    },  


}
