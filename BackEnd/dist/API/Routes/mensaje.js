"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MENSAJE ROUTER
const mensaje_1 = require("./../Controllers/mensaje");
const express_1 = require("express");
exports.MensajeRouter = express_1.Router();
/**
 * Implementamos las consultas mediante  GET
 */
exports.MensajeRouter.get('/mensaje/:cita_id', mensaje_1.MensajeController.getMensajeByIdCita);
exports.MensajeRouter.post('/mensaje', mensaje_1.MensajeController.createMensaje);
