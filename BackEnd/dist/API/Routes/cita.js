"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CITA ROUTER
const cita_1 = require("./../Controllers/cita");
const express_1 = require("express");
exports.CitaRouter = express_1.Router();
/**
 * Implementamos las consultas mediante  GET
 */
exports.CitaRouter.get('/cita/:publi_id', cita_1.CitaController.getCitaByIdPublicacion);
exports.CitaRouter.post('/cita', cita_1.CitaController.createCita);
