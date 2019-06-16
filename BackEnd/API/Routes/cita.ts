// CITA ROUTER
import {CitaController} from'./../Controllers/cita';
import {Router} from 'express';

export var CitaRouter=Router();
/**
 * Implementamos las consultas mediante  GET
 */
CitaRouter.get('/cita/:publi_id',CitaController.getCitaByIdPublicacion);
CitaRouter.post('/cita',CitaController.createCita);

