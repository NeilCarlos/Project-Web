"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../Configuracion/sequelize");
const sequelize_2 = require("./../Configuracion/sequelize");
var fs = require('fs');
var path_module = require('path');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.PublicacionController = {
    createPublicacion: (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const npublicacion = sequelize_1.Publicacion.build(req.body);
            yield sequelize_2.sequelize.transaction((transac) => __awaiter(this, void 0, void 0, function* () {
                yield npublicacion.save({ transaction: transac }).then((publicacionCreada) => __awaiter(this, void 0, void 0, function* () {
                    if (publicacionCreada) {
                        yield sequelize_1.Foto.create({
                            fot_img: req.body.foto_img,
                            publi_id: publicacionCreada.publi_id
                        }, { transaction: transac }).then((respuesta) => {
                            if (respuesta) {
                                res.status(200).json({
                                    message: "created",
                                    content: {
                                        publicacion: publicacionCreada,
                                        imagen: respuesta.fot_id
                                    }
                                });
                            }
                            else {
                                throw new Error('Rollback initiated');
                            }
                        });
                    }
                    else {
                        throw new Error('Rollback initiated');
                    }
                }));
            }));
        }
        catch (error) {
            res.status(500).json({
                message: "Ocurrio un Error",
                content: error
            });
        }
    }),
    // uploadFile:(req: Request, res: Response)=>{
    //     let{publi_id}=req.params;
    //     if(req.files){
    //         let ruta=req.files.archivo.path;
    //         // para separar la ruta del nombre .images\d
    //         let nombreyextension=ruta.split('\\')[1];
    //     //    console.log(nombreyextension);  
    // Foto.create({
    //     fot_img:nombreyextension,
    //     publi_id:publi_id
    // }).then((respuesta: any) => {
    //     if (respuesta) {
    //         res.status(200).json({
    //             message: "created",
    //             content: respuesta
    //         });
    //     } else {
    //         res.status(500).json({
    //             message: "no se creo la imagen",
    //             content: null
    //         });
    //     }
    // });
    //     }else{
    //         return res.status(500).send({
    //             message:"No hay archivos"
    //         });
    //     }
    // },
    getImagenPublicacion: (req, res) => {
        let { publi_id } = req.params;
        sequelize_1.Foto.findAll({ where: { publi_id: publi_id } }).then((respuesta) => {
            if (respuesta.length > 0) {
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
        // let ruta = `./images/${req.params.name}`;
        // let rutaDefault = `./images/default.png`;
        // if (fs.existsSync(ruta)) {
        //     return res.sendfile(path_module.resolve(ruta));
        // } else {
        //     return res.sendfile(path_module.resolve(rutaDefault));
        // }
    },
    getPublicacionByIdPublicacion: (req, res) => {
        let { publi_id } = req.params;
        sequelize_1.Publicacion.findAll({ where: { publi_id: publi_id }, include: [{ model: sequelize_1.Oferta }, { model: sequelize_1.Cita }] }).then((respuesta) => {
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
    /**
     *
     */
    getAllPublicaciones: (req, res) => {
        let { publi_estado } = req.params;
        sequelize_1.Publicacion.findAll({ where: { publi_estado: publi_estado } }).then((respuesta) => {
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
        let { nombre, publi_estado } = req.params;
        sequelize_1.Publicacion.findAll({
            where: { [Op.and]: [{ publi_descripcion: { [Op.like]: `%${nombre}%` } }, { publi_estado: { [Op.eq]: publi_estado } }] },
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
        let { nombre, catpro_id, publi_estado } = req.params;
        sequelize_1.Publicacion.findAll({
            where: { [Op.and]: [{ publi_descripcion: { [Op.like]: `%${nombre}%` } }, { publi_estado: { [Op.eq]: publi_estado } }, { catpro_id: { [Op.eq]: catpro_id } }] },
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
        sequelize_1.Publicacion.findAll({ where: { usu_id: usu_id }, include: [{ model: sequelize_1.Oferta }] })
            .then((respuesta) => {
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
    cambiarEstadoPublicacionById: (req, res) => {
        let { publi_id, publi_estado } = req.params;
        sequelize_1.Publicacion.update({ publi_estado: publi_estado }, { where: { publi_id: publi_id } }).then((datos_actualizados) => {
            if (datos_actualizados[0] > 0) {
                res.status(200).json({
                    message: "updated",
                    content: datos_actualizados[0]
                });
            }
            else {
                res.status(400).json({
                    message: "not updated",
                    content: null
                });
            }
        }).catch((error) => {
            res.status(400).json({
                message: "failed",
                content: error
            });
        });
    }
};
