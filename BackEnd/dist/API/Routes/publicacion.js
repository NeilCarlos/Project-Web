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
// Mostrar todas las Publicaciones por estado
exports.PublicacionRouter.get('/publicacion/:publi_estado', publicacion_1.PublicacionController.getAllPublicaciones);
// Buscar publicacion por publi_id
exports.PublicacionRouter.get('/publicacion/buscarById/:publi_id', publicacion_1.PublicacionController.getPublicacionByIdPublicacion);
// Mostrar todas las publicaiones por nombre y estado
exports.PublicacionRouter.get('/publicacion/buscarByNombre/:nombre/:publi_estado', publicacion_1.PublicacionController.getPublicacionByNombre);
// Mostrar todas las publiaciones por nombre ,cat_id, estado
exports.PublicacionRouter.get('/publicacion/buscarByNombreyCatProd/:nombre/:catpro_id/:publi_estado', publicacion_1.PublicacionController.getPublicacionByNombreYCategotia);
// Mostrar todas las publicaciones por usu_id
exports.PublicacionRouter.get('/publicacion/buscarByIdUsuario/:usu_id', publicacion_1.PublicacionController.getPublicacionByIdUsuario);
// Mostrar Fotos de una publicacion
exports.PublicacionRouter.get('/publicacion/fotos/:publi_id', publicacion_1.PublicacionController.getImagenPublicacion);
// Cambiar Estado de una publicacion por publi_id
exports.PublicacionRouter.put('/publicacion/cambiarEstado/:publi_id/:publi_estado', publicacion_1.PublicacionController.cambiarEstadoPublicacionById);
// Crear Publicacion
exports.PublicacionRouter.post('/publicacion', publicacion_1.PublicacionController.createPublicacion);
