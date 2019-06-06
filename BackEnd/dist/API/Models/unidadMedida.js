"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.unidadMedida_model = (sequelize) => {
    var unidadMedida_model = sequelize.define('t_unidad_medida', {
        inimed_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        unimed_simbolo: {
            type: sequelize_1.DataTypes.STRING(5),
            allowNull: true
        },
        unimed_descripcion: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_unidad_medida'
    });
    return unidadMedida_model;
};
