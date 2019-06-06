"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// USUARIO ROUTER
const publicacion_1 = require("./../Controllers/publicacion");
const express_1 = require("express");
exports.PublicacionRouter = express_1.Router();
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({ uploadDir: './images' });
/**
 * Implementamos las consultas mediante  GET
 */
exports.PublicacionRouter.get('/publicacion', publicacion_1.PublicacionController.getAllPublicaciones);
exports.PublicacionRouter.get('/publicacion/:publi_id', publicacion_1.PublicacionController.getPublicacionByIdPubliacion);
exports.PublicacionRouter.get('/publicacion/buscarByNombre/:nombre', publicacion_1.PublicacionController.getPublicacionByNombre);
exports.PublicacionRouter.get('/publicacion/buscarByNombreyCatProd/:nombre/:catpro_id', publicacion_1.PublicacionController.getPublicacionByNombreYCategotia);
exports.PublicacionRouter.get('/publicacion/buscarByIdUsuario/:usu_id', publicacion_1.PublicacionController.getPublicacionByIdUsuario);
exports.PublicacionRouter.post('/publicacion', publicacion_1.PublicacionController.createPublicacion);
exports.PublicacionRouter.post('/publicacion/upload/:publi_id', multipartyMiddleware, publicacion_1.PublicacionController.uploadFile);
