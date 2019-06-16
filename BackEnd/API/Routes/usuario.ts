// USUARIO ROUTER
import {UsuarioController} from'./../Controllers/usuario';
import {Router} from 'express';

export var UsuarioRouter=Router();

var multiparty=require('connect-multiparty');
var multipartyMiddleware=multiparty({uploadDir:'./images'});
/**
 * Implementamos las consultas mediante  GET
 */
// Crear Usuario
UsuarioRouter.post('/usuario',UsuarioController.createUsuario);
//Crear usuario con redes Sociales
UsuarioRouter.post('/usuario/social',UsuarioController.createSocialRegister);
// Actualizar usuario
UsuarioRouter.put('/usuario',UsuarioController.updateUsuariobyId);
// Bucar Usuario por ID
UsuarioRouter.get('/usuario/:usu_id',UsuarioController.getUsuarioById);
// Login usuario
UsuarioRouter.post('/usuario/login',UsuarioController.loginUsuario);
// Login con redes sociales google o facebook
UsuarioRouter.post('/usuario/login/social',UsuarioController.loginUsuarioRedesSociales);
// Cambiar contraseña
UsuarioRouter.post('/usuario/cambiopass',UsuarioController.cambiarPass);
// Dar de baja a usuario () cambiar estado)
UsuarioRouter.put('/usuario/darbaja/:usu_id/:usu_estado',UsuarioController.darBajaUsuarioById);
// Subir imagen como avatar
UsuarioRouter.put('/usuario/uploadavatar',UsuarioController.uploadImageAvatar);
// Retornar imagen avatar
UsuarioRouter.get('/usuario/avatar/:usu_id',UsuarioController.getImagenAvatar);

