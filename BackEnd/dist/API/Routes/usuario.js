"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// USUARIO ROUTER
const usuario_1 = require("./../Controllers/usuario");
const express_1 = require("express");
exports.UsuarioRouter = express_1.Router();
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({ uploadDir: './images' });
/**
 * Implementamos las consultas mediante  GET
 */
// Crear Usuario
exports.UsuarioRouter.post('/usuario', usuario_1.UsuarioController.createUsuario);
//Crear usuario con redes Sociales
exports.UsuarioRouter.post('/usuario/social', usuario_1.UsuarioController.createSocialRegister);
// Actualizar usuario
exports.UsuarioRouter.put('/usuario', usuario_1.UsuarioController.updateUsuariobyId);
// Bucar Usuario por ID
exports.UsuarioRouter.get('/usuario/:usu_id', usuario_1.UsuarioController.getUsuarioById);
// Login usuario
exports.UsuarioRouter.post('/usuario/login', usuario_1.UsuarioController.loginUsuario);
// Login con redes sociales google o facebook
exports.UsuarioRouter.post('/usuario/login/social', usuario_1.UsuarioController.loginUsuarioRedesSociales);
// Cambiar contraseña
exports.UsuarioRouter.post('/usuario/cambiopass', usuario_1.UsuarioController.cambiarPass);
// Dar de baja a usuario () cambiar estado)
exports.UsuarioRouter.put('/usuario/darbaja/:usu_id/:usu_estado', usuario_1.UsuarioController.darBajaUsuarioById);
// Subir imagen como avatar
exports.UsuarioRouter.put('/usuario/uploadavatar', usuario_1.UsuarioController.uploadImageAvatar);
// Retornar imagen avatar
exports.UsuarioRouter.get('/usuario/avatar/:usu_id', usuario_1.UsuarioController.getImagenAvatar);
