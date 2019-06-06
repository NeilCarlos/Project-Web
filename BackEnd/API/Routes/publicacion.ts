// USUARIO ROUTER
import {PublicacionController} from'./../Controllers/publicacion';
import {Router} from 'express';

export var PublicacionRouter=Router();

var multiparty=require('connect-multiparty');
var multipartyMiddleware=multiparty({uploadDir:'./images'});

/**
 * Implementamos las consultas mediante  GET
 */
PublicacionRouter.get('/publicacion',PublicacionController.getAllPublicaciones);
PublicacionRouter.get('/publicacion/:publi_id',PublicacionController.getPublicacionByIdPubliacion);
PublicacionRouter.get('/publicacion/buscarByNombre/:nombre',PublicacionController.getPublicacionByNombre);
PublicacionRouter.get('/publicacion/buscarByNombreyCatProd/:nombre/:catpro_id',PublicacionController.getPublicacionByNombreYCategotia);
PublicacionRouter.get('/publicacion/buscarByIdUsuario/:usu_id',PublicacionController.getPublicacionByIdUsuario);

PublicacionRouter.post('/publicacion',PublicacionController.createPublicacion);
PublicacionRouter.post('/publicacion/upload/:publi_id',multipartyMiddleware,PublicacionController.uploadFile);
