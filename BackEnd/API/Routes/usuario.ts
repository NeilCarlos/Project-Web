// USUARIO ROUTER
import {UsuarioController} from'./../Controllers/usuario';
import {Router} from 'express';

export var UsuarioRouter=Router();

var multiparty=require('connect-multiparty');
var multipartyMiddleware=multiparty({uploadDir:'./images'});
/**
 * Implementamos las consultas mediante  GET
 */
UsuarioRouter.get('/usuario/:idusuario',UsuarioController.getUsuarioById);
UsuarioRouter.get('/usuario/avatar/:name',UsuarioController.getImagenAvatar);
UsuarioRouter.post('/usuario',UsuarioController.createUsuario);
UsuarioRouter.post('/usuario/social',UsuarioController.createSocialRegister);
UsuarioRouter.post('/usuario/login',UsuarioController.loginUsuario);
UsuarioRouter.post('/usuario/login/social',UsuarioController.loginUsuarioRedesSociales);
UsuarioRouter.post('/usuario/cambiopass',UsuarioController.cambiarPass);
UsuarioRouter.put('/usuario',UsuarioController.updateUsuariobyId);
UsuarioRouter.put('/usuario/darbaja/:usu_id',UsuarioController.darBajaUsuarioById);
UsuarioRouter.post('/usuario/uploadavatar/:usu_id',multipartyMiddleware,UsuarioController.uploadImageAvatar);

