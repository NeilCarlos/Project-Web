// USUARIO ROUTER
import {UsuarioController} from'./../Controllers/usuario';
import {Router} from 'express';

export var UsuarioRouter=Router();
/**
 * Implementamos las consultas mediante  GET
 */
UsuarioRouter.get('/usuario/:idusuario',UsuarioController.getUsuarioById);
UsuarioRouter.post('/usuario',UsuarioController.createUsuario);
UsuarioRouter.post('/usuario/login',UsuarioController.loginUsuario);
UsuarioRouter.post('/usuario/cambiopass',UsuarioController.cambiarPass);
UsuarioRouter.put('/usuario',UsuarioController.updateUsuariobyId);
UsuarioRouter.put('/usuario/darbaja/:usu_id',UsuarioController.darBajaUsuarioById);
