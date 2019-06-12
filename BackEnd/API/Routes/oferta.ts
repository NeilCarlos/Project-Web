// OFERTA ROUTER
import {OfertaController} from'./../Controllers/oferta';
import {Router} from 'express';

export var OfertaRouter=Router();
/**
 * Implementamos las consultas mediante  GET
 */
OfertaRouter.get('/oferta/:publi_id',OfertaController.getOfertasByIdPublicacion);
OfertaRouter.post('/oferta',OfertaController.createOferta);

