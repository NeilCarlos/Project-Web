// USUARIO CONTROLER
import { Request, Response } from 'express';
import { Publicacion, Oferta ,Foto} from './../Configuracion/sequelize';

var fs = require('fs');
var path_module = require('path');

const Sequelize=require('sequelize');
const Op = Sequelize.Op;
export var PublicacionController = {

    createPublicacion: (req: Request, res: Response) => {
        const npublicacion = Publicacion.build(req.body);

        npublicacion.save().then((publicacionCreada: any) => {
            if (publicacionCreada) {
                res.status(200).json({
                    message: "created",
                    content: publicacionCreada
                });
            } else {
                res.status(500).json({
                    message: "not created",
                    content: null
                });
            }
        });
    },
    uploadFile:(req: Request, res: Response)=>{
        let{publi_id}=req.params;
        if(req.files){
            let ruta=req.files.archivo.path;
            // para separar la ruta del nombre .images\d
            let nombreyextension=ruta.split('\\')[1];
        //    console.log(nombreyextension);  
            Foto.create({
                fot_img:nombreyextension,
                publi_id:publi_id
            }).then((respuesta: any) => {
                if (respuesta) {
                    res.status(200).json({
                        message: "created",
                        content: respuesta
                    });
                } else {
                    res.status(500).json({
                        message: "no se creo la imagen",
                        content: null
                    });
                }
            });

        }else{
            return res.status(500).send({
                message:"No hay archivos"
            });
        }
    },
    getImagenPublicacion:(req:Request,res:Response)=>{
        // let {publi_id}=req.params;
        // // Buscar Fotos Publicacion
        // let fotos=[];

        // Foto.findAll({where:{publi_id}}).then((respuesta:any)=>{                        
        //     if(respuesta.length>0){
        //         // return respuesta.json();
        //         respuesta.forEach((element:any) => {

        //             let ruta=`./images/${element.fot_img}`;
        //             if(fs.existsSync(ruta)){
        //                 fotos.push(path_module.resolve(ruta));
        //             }

        //         });
        //         res.sendfile(fotos);          
        //     }else{
        //         res.status(500).json({
        //             message: "not found photos",
        //             content: null
        //         });
        //     }
        // });
        let ruta=`./images/${req.params.name}`;
        let rutaDefault=`./images/default.png`;
        if(fs.existsSync(ruta)){
            return res.sendfile(path_module.resolve(ruta));
        }else{
            return res.sendfile(path_module.resolve(rutaDefault));
        }
    },
    getPublicacionByIdPublicacion:(req: Request, res: Response)=>{
        let {publi_id}=req.params;

        Publicacion.findAll({where:{publi_id:publi_id},include:[{model:Foto},{model:Oferta}]}).then((respuesta:any)=>{
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
    getAllPublicaciones:(req: Request, res: Response)=>{

        Publicacion.findAll({include:[{model:Foto}]}).then((respuesta:any)=>{
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
    getPublicacionByNombre:(req: Request, res: Response)=>{
        let {nombre}=req.params;

        Publicacion.findAll({
            where: {[Op.and]: [{publi_descripcion: {[Op.like]: `%${nombre}%`}}, {publi_estado: {[Op.eq]: 'p'}}]},
            },{include:[{model:Foto}]}).then((respuesta:any)=>{
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
    getPublicacionByNombreYCategotia:(req: Request, res: Response)=>{
        let {nombre,catpro_id}=req.params;
        Publicacion.findAll({
            where: {[Op.and]: [{publi_descripcion: {[Op.like]: `%${nombre}%`}}, {publi_estado: {[Op.eq]: 'p'}}, {catpro_id: {[Op.eq]: catpro_id}}]},
            },{include:[{model:Foto}]}).then((respuesta:any)=>{
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
    getPublicacionByIdUsuario:(req: Request, res: Response)=>{
        let {usu_id}=req.params;
        Publicacion.findAll({
            where: {[Op.and]: [{usu_id: {[Op.eq]: usu_id }}]},
            },{
            include:[
                {model:Foto},
                {model:Oferta}
            ],            
        }
            ).then((respuesta:any)=>{
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
    cambiarEstadoPublicacionById:(req: Request, res: Response)=>{
        let{publi_id,publi_estado}=req.body;
        
        Publicacion.update({publi_estado:publi_estado}, {where: {publi_id:publi_id}}).then((datos_actualizados:any)=>{
            if(datos_actualizados[0]>0){
                res.status(200).json({
                    message:"updated",
                    content:datos_actualizados[0]
                });
            }else{
                res.status(400).json({
                    message:"not updated",
                    content:null
                });
            }
        });
    }
    // updateUsuariobyId:(req: Request, res: Response)=>{
    //     let{usu_id,usu_nombre,usu_urlimagen,usu_email,usu_telefono,usu_tiposesion,usu_lng,usu_lat,usu_tipousu,usu_avatar}=req.body;

    //     let updateusuario={
    //         usu_nombre:usu_nombre,
    //         usu_urlimagen:usu_urlimagen,
    //         usu_email:usu_email,
    //         usu_telefono:usu_telefono,
    //         usu_tiposesion:usu_tiposesion,
    //         usu_lng:usu_lng,
    //         usu_lat:usu_lat,
    //         usu_tipousu:usu_tipousu,
    //         usu_avatar:usu_avatar
    //     }
    //     Usuario.update(updateusuario, {where: {usu_id:usu_id}}).then((datos_actualizados:any)=>{            
            
    //         if(datos_actualizados[0]>0){
    //             res.status(200).json({
    //                 message:"updated",
    //                 content:datos_actualizados[0]
    //             });
    //         }else{
    //             res.status(400).json({
    //                 message:"not updated",
    //                 content:null
    //             });
    //         }
    //     });
    // },
    // darBajaUsuarioById:(req: Request, res: Response)=>{
    //     let{usu_id}=req.params;
        
    //     Usuario.update({usu_estado:'i'}, {where: {usu_id:usu_id}}).then((datos_actualizados:any)=>{
    //         if(datos_actualizados[0]>0){
    //             res.status(200).json({
    //                 message:"updated",
    //                 content:datos_actualizados[0]
    //             });
    //         }else{
    //             res.status(400).json({
    //                 message:"not updated",
    //                 content:null
    //             });
    //         }
    //     });
    // },




}
