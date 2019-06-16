"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
exports.usuario_model = (sequelize) => {
    var usuario_model = sequelize.define('t_usuario', {
        usu_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_nombre: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false
        },
        usu_urlimagen: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        usu_email: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false
        },
        usu_telefono: {
            type: sequelize_1.DataTypes.STRING(20),
            allowNull: true
        },
        usu_estado: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false
        },
        usu_salt: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        usu_hash: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        usu_tiposesion: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        usu_lng: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        usu_lat: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        usu_tipousu: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: true
        },
        usu_calificacion: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
        usu_avatar: {
            type: sequelize_1.DataTypes.TEXT('medium'),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_usuario'
    });
    usuario_model.prototype.setSaltAndHash = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    //Validar pasword 
    usuario_model.prototype.ValidarPassword = function (password) {
        let hashTemp = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        console.log(hashTemp);
        if (hashTemp === this.usu_hash) {
            return true;
        }
        else {
            return false;
        }
    };
    //Generar Token
    usuario_model.prototype.generarJWT = function () {
        let payload = {
            usu_id: this.usu_id,
            usu_nombre: this.usu_nombre,
            usu_urlimagen: this.usu_urlimagen,
            usu_email: this.usu_email,
            usu_tiposesion: this.usu_tiposesion
        };
        var token = jwt.sign(payload, 'ecollect', { expiresIn: '5h' }, { algorithm: 'RS256' });
        return token;
    };
    return usuario_model;
};
