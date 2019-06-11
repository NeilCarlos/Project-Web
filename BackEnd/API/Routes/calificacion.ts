// CALIFICA ROUTER
import {HCalificacionController} from'./../Controllers/calificacion';
import {Router} from 'express';

export var HCalificacionRouter=Router();
/**
 * Implementamos las consultas mediante  GET
 */
HCalificacionRouter.get('/calificacion/puntuacion',HCalificacionController.getCalificacionUsuarioByTipoUsuario);
HCalificacionRouter.post('/calificacion',HCalificacionController.createCalificacion);

