"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.oferta_model = (sequelize) => {
    var oferta_model = sequelize.define('t_oferta', {
        ofer_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ofer_precio_oferta: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        ofer_comentario: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        ofer_fecha: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true
        },
        ofer_estado: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_oferta'
    });
    return oferta_model;
};
