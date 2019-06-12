"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.publicacionDetalle_Model = (sequelize) => {
    var publicacionDetalle_Model = sequelize.define('t_publicacion_detalle', {
        publide_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        publide_foto: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        publide_cant: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        },
        publide_precio_sugerido: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        publide_descripcion: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_publicacion_detalle'
    });
    return publicacionDetalle_Model;
};
