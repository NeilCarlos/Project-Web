"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../Configuracion/sequelize");
exports.UsuarioController = {
    loginUsuario: (req, res) => {
        //BuscarUsuario
        let { usu_email, usu_pass } = req.body;
        sequelize_1.Usuario.findOne({
            where: {
                usu_email: usu_email
            }
        }).then((usuario_encontrado) => {
            if (usuario_encontrado) {
                //Validar Password
                if (usuario_encontrado.ValidarPassword(usu_pass)) {
                    res.status(200).send({
                        message: 'ok',
                        token: usuario_encontrado.generarJWT()
                    });
                }
                else {
                    res.status(500).json({
                        message: 'error',
                        content: 'usuario o pasword incorrectos'
                    });
                }
            }
            else {
                res.status(500).json({
                    message: 'error',
                    content: 'usuario o pasword incorrectos'
                });
            }
        });
    },
    cambiarPass: (req, res) => {
        let { usu_email, usu_pass, new_pass } = req.body;
        sequelize_1.Usuario.findOne({
            where: {
                usu_email: usu_email
            }
        }).then((usuario_encontrado) => {
            if (usuario_encontrado) {
                if (usuario_encontrado.ValidarPassword(usu_pass)) {
                    // Cambiar password                    
                    usuario_encontrado.setSaltAndHash(new_pass);
                    sequelize_1.Usuario.update({
                        usu_salt: usuario_encontrado.usu_salt,
                        usu_hash: usuario_encontrado.usu_hash
                    }, { where: { usu_id: usuario_encontrado.usu_id } }).then((datos_actualizados) => {
                        if (datos_actualizados > 0) {
                            res.status(200).json({
                                message: "updated",
                                content: datos_actualizados
                            });
                        }
                        else {
                            res.status(400).json({
                                message: "not updated",
                                content: null
                            });
                        }
                    });
                }
                else {
                    res.status(500).json({
                        message: 'error',
                        content: 'usuario o pasword incorrectos'
                    });
                }
            }
            else {
                res.status(500).json({
                    message: 'error',
                    content: 'usuario o pasword incorrectos'
                });
            }
        });
    },
    getUsuarioById: (req, res) => {
        const { idusuario } = req.params;
        sequelize_1.Usuario.findByPk(idusuario).then((usuario) => {
            if (usuario) {
                res.status(200).json({
                    message: "found",
                    content: usuario
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
    updateUsuariobyId: (req, res) => {
        let { usu_id, usu_nombre, usu_urlimagen, usu_email, usu_telefono, usu_tiposesion, usu_lng, usu_lat, usu_tipousu, usu_avatar } = req.body;
        let updateusuario = {
            usu_nombre: usu_nombre,
            usu_urlimagen: usu_urlimagen,
            usu_email: usu_email,
            usu_telefono: usu_telefono,
            usu_tiposesion: usu_tiposesion,
            usu_lng: usu_lng,
            usu_lat: usu_lat,
            usu_tipousu: usu_tipousu,
            usu_avatar: usu_avatar
        };
        sequelize_1.Usuario.update(updateusuario, { where: { usu_id: usu_id } }).then((datos_actualizados) => {
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
        });
    },
    darBajaUsuarioById: (req, res) => {
        let { usu_id } = req.params;
        sequelize_1.Usuario.update({ usu_estado: 'i' }, { where: { usu_id: usu_id } }).then((datos_actualizados) => {
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
        });
    },
    createUsuario: (req, res) => {
        //Verificando que el email no se repita
        sequelize_1.Usuario.findAll({
            where: {
                usu_email: req.body.usu_email
            }
        }).then((resultado) => {
            console.log(resultado);
            if (resultado[0] == null) {
                const nusuario = sequelize_1.Usuario.build(req.body);
                nusuario.setSaltAndHash(req.body.usu_pass);
                nusuario.save().then((usuariocreado) => {
                    if (usuariocreado) {
                        res.status(200).json({
                            message: "created",
                            content: usuariocreado
                        });
                    }
                    else {
                        res.status(500).json({
                            message: "not created",
                            content: null
                        });
                    }
                });
            }
            else {
                res.status(500).json({
                    message: `Failed, El usuario con email ${req.body.usu_email} ya esta registrado.`,
                    content: null
                });
            }
        });
    },
};
