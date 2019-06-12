"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.mensaje_model = (sequelize) => {
    var mensaje_model = sequelize.define('t_mensaje', {
        men_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        men_mensaje: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        men_fecha: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 't_mensaje'
    });
    return mensaje_model;
};
