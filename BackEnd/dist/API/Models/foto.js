"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.foto_model = (sequelize) => {
    var foto_model = sequelize.define('t_foto', {
        fot_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fot_img: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_foto'
    });
    return foto_model;
};
