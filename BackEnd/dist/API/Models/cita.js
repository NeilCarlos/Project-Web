"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.cita_model = (sequelize) => {
    var cita_model = sequelize.define('t_cita', {
        cita_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cita_ubicacion: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        cita_hora: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true
        },
        cita_fecha: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true
        },
        cita_estado: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_cita'
    });
    return cita_model;
};
