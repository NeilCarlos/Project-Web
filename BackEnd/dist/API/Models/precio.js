"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.precio_model = (sequelize) => {
    var precio_model = sequelize.define('t_precio', {
        prec_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        prec_sugerido: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_precio'
    });
    return precio_model;
};
