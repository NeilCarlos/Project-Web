"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// OFERTA ROUTER
const oferta_1 = require("./../Controllers/oferta");
const express_1 = require("express");
exports.OfertaRouter = express_1.Router();
/**
 * Implementamos las consultas mediante  GET
 */
exports.OfertaRouter.get('/oferta/:publi_id', oferta_1.OfertaController.getOfertasByIdPublicacion);
exports.OfertaRouter.post('/oferta', oferta_1.OfertaController.createOferta);
