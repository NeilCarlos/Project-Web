"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../Configuracion/sequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.OfertaController = {
    createOferta: (req, res) => {
        const noferta = sequelize_1.Oferta.build(req.body);
        noferta.save().then((OfertaCreada) => {
            if (OfertaCreada) {
                res.status(200).json({
                    message: "created",
                    content: OfertaCreada
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
    getOfertasByIdPublicacion: (req, res) => {
        let { publi_id } = req.params;
        sequelize_1.Oferta.findAll({ where: { publi_id: publi_id }, order: [['ofer_precio_oferta', 'DESC']] }).then((respuesta) => {
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
};
