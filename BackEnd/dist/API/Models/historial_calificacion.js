"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.historialCalificacion_model = (sequelize) => {
    var historialCalificacion_model = sequelize.define('t_historia_calificacion', {
        calif_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        calif_puntuacion: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        calif_observacion: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        calif_perfil: {
            type: sequelize_1.DataTypes.STRING(20),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_historia_calificacion'
    });
    return historialCalificacion_model;
};
