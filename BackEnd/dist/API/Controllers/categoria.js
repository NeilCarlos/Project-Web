"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../Configuracion/sequelize");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.CateogiraController = {
    createCategoria: (req, res) => {
        const nCateogira = sequelize_1.CategoriaProducto.build(req.body);
        nCateogira.save().then((catCreada) => {
            if (catCreada) {
                res.status(200).json({
                    message: "created",
                    content: catCreada
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
    getCategorias: (req, res) => {
        sequelize_1.CategoriaProducto.findAll({ include: [{ model: sequelize_1.Precio }] }).then((respuesta) => {
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
