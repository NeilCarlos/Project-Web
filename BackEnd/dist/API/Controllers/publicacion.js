"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../Configuracion/sequelize");
// var fs = require('fs');
// var path_module = require('path');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.PublicacionController = {
    createPublicacion: (req, res) => {
        const npublicacion = sequelize_1.Publicacion.build(req.body);
        npublicacion.save().then((publicacionCreada) => {
            if (publicacionCreada) {
                res.status(200).json({
                    message: "created",
                    content: publicacionCreada
                });
            }
            else {
                res.status(500).json({
                    message: "not created",
                    content: null
                });
            }
        });
    },
    uploadFile: (req, res) => {
        let { publi_id } = req.params;
        if (req.files) {
            let ruta = req.files.archivo.path;
            // para separar la ruta del nombre .images\d
            let nombreyextension = ruta.split('\\')[1];
            //    console.log(nombreyextension);  
            sequelize_1.Foto.create({
                fot_img: nombreyextension,
                publi_id: publi_id
            }).then((respuesta) => {
                if (respuesta) {
                    res.status(200).json({
                        message: "created",
                        content: respuesta
                    });
                }
                else {
                    res.status(500).json({
                        message: "no se creo la imagen",
                        content: null
                    });
                }
            });
        }
        else {
            return res.status(500).send({
                message: "No hay archivos"
            });
        }
    },
    getPublicacionByIdPubliacion: (req, res) => {
        let { publi_id } = req.params;
        sequelize_1.Publicacion.findAll({
            where: { [Op.and]: [{ publi_id: { [Op.eq]: publi_id } }] },
        }).then((respuesta) => {
            if (respuesta) {
                res.status(200).json({
                    message: "ok",
                    content: respuesta
                });
            }
            else {
                res.status(500).json({
                    message: "not found",
                    content: null
                });
            }
        });
    },
    getAllPublicaciones: (req, res) => {
        sequelize_1.Publicacion.findAll({ include: [{ model: sequelize_1.Foto }] }).then((respuesta) => {
            if (respuesta) {
                res.status(200).json({
                    message: "ok",
                    content: respuesta
                });
            }
            else {
                res.status(500).json({
                    message: "not found",
                    content: null
                });
            }
        });
    },
    getPublicacionByNombre: (req, res) => {
        let { nombre } = req.params;
        sequelize_1.Publicacion.findAll({
            where: { [Op.and]: [{ publi_descripcion: { [Op.like]: `%${nombre}%` } }, { publi_estado: { [Op.eq]: 'p' } }] },
        }, { include: [{ model: sequelize_1.Foto }] }).then((respuesta) => {
            if (respuesta) {
                res.status(200).json({
                    message: "ok",
                    content: respuesta
                });
            }
            else {
                res.status(500).json({
                    message: "not found",
                    content: null
                });
            }
        });
    },
    getPublicacionByNombreYCategotia: (req, res) => {
        let { nombre, catpro_id } = req.params;
        sequelize_1.Publicacion.findAll({
            where: { [Op.and]: [{ publi_descripcion: { [Op.like]: `%${nombre}%` } }, { publi_estado: { [Op.eq]: 'p' } }, { catpro_id: { [Op.eq]: catpro_id } }] },
        }, { include: [{ model: sequelize_1.Foto }] }).then((respuesta) => {
            if (respuesta) {
                res.status(200).json({
                    message: "ok",
                    content: respuesta
                });
            }
            else {
                res.status(500).json({
                    message: "not found",
                    content: null
                });
            }
        });
    },
    getPublicacionByIdUsuario: (req, res) => {
        let { usu_id } = req.params;
        sequelize_1.Publicacion.findAll({
            where: { [Op.and]: [{ usu_id: { [Op.eq]: usu_id } }] },
        }, {
            include: [
                { model: sequelize_1.Foto },
                { model: sequelize_1.Oferta }
            ],
        }).then((respuesta) => {
            if (respuesta) {
                res.status(200).json({
                    message: "ok",
                    content: respuesta
                });
            }
            else {
                res.status(500).json({
                    message: "not found",
                    content: null
                });
            }
        });
    },
    AnularPublicacionById: (req, res) => {
        let { publi_id } = req.params;
        // Buscar Publicacion
        sequelize_1.Publicacion.findAll({
            where: { [Op.and]: [{ publi_id: { [Op.eq]: publi_id } }] },
        }).then((respuesta) => {
            if (respuesta) {
                res.status(200).json({
                    message: "ok",
                    content: respuesta
                });
            }
            else {
                res.status(500).json({
                    message: "not found",
                    content: null
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
};
