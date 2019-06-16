"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../Configuracion/sequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.HCalificacionController = {
    createCalificacion: (req, res) => {
        const nHCalificacion = sequelize_1.HistorialCalificacion.build(req.body);
        nHCalificacion.save().then((califCreada) => {
            if (califCreada) {
                res.status(200).json({
                    message: "created",
                    content: califCreada
                });
            }
            else {
                res.status(500).json({
                    message: "not created",
                    content: null
                });
            }
        }).catch((error) => {
            res.status(500).json({
                message: "failed",
                content: error.original.sqlMessage
            });
        });
    },
    getCalificacionUsuarioByTipoUsuario: (req, res) => {
        let { usu_id, calif_perfil } = req.body;
        sequelize_1.HistorialCalificacion.findAll({
            attributes: [['avg(calif_puntuacion)', 'Promedio']],
            where: { [Op.and]: [{ usu_id: { [Op.eq]: usu_id } }, { calif_perfil: { [Op.eq]: calif_perfil } }] },
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
        }).catch((error) => {
            res.status(500).json({
                message: "failed",
                content: error.original.sqlMessage
            });
        });
    },
};
