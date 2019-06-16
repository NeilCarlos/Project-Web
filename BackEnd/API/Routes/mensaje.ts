// MENSAJE ROUTER
import {MensajeController} from'./../Controllers/mensaje';
import {Router} from 'express';

export var MensajeRouter=Router();
/**
 * Implementamos las consultas mediante  GET
 */
MensajeRouter.get('/mensaje/:cita_id',MensajeController.getMensajeByIdCita);
MensajeRouter.post('/mensaje',MensajeController.createMensaje);
