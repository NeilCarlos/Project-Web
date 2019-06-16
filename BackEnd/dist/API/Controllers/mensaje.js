"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../Configuracion/sequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.MensajeController = {
    createMensaje: (req, res) => {
        const nMensaje = sequelize_1.Mensaje.build(req.body);
        nMensaje.men_fecha = new Date();
        console.log(nMensaje);
        nMensaje.save().then((MensajeCreado) => {
            if (MensajeCreado) {
                res.status(200).json({
                    message: "created",
                    content: MensajeCreado
                });
            }
            else {
                res.status(500).json({
                    message: "not created",
                    content: null
                });
            }
            // Agregar aqui un socket
        }).catch((error) => {
            res.status(500).json({
                message: "failed",
                content: error.original.sqlMessage
            });
        });
    },
    getMensajeByIdCita: (req, res) => {
        let { cita_id } = req.params;
        sequelize_1.Mensaje.findAll({ where: { cita_id } }).then((respuesta) => {
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
        }).catch((error) => {
            res.status(500).json({
                message: "failed",
                content: error
            });
        });
    },
};
