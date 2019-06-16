"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CALIFICA ROUTER
const calificacion_1 = require("./../Controllers/calificacion");
const express_1 = require("express");
exports.HCalificacionRouter = express_1.Router();
/**
 * Implementamos las consultas mediante  GET
 */
exports.HCalificacionRouter.get('/calificacion/puntuacion', calificacion_1.HCalificacionController.getCalificacionUsuarioByTipoUsuario);
exports.HCalificacionRouter.post('/calificacion', calificacion_1.HCalificacionController.createCalificacion);
