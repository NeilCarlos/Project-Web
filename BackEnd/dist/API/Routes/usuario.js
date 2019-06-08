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
exports.UsuarioRouter.get('/usuario/:idusuario', usuario_1.UsuarioController.getUsuarioById);
exports.UsuarioRouter.get('/usuario/avatar/:name', usuario_1.UsuarioController.getImagenAvatar);
exports.UsuarioRouter.post('/usuario', usuario_1.UsuarioController.createUsuario);
exports.UsuarioRouter.post('/usuario/social', usuario_1.UsuarioController.createSocialRegister);
exports.UsuarioRouter.post('/usuario/login', usuario_1.UsuarioController.loginUsuario);
exports.UsuarioRouter.post('/usuario/login/social', usuario_1.UsuarioController.loginUsuarioRedesSociales);
exports.UsuarioRouter.post('/usuario/cambiopass', usuario_1.UsuarioController.cambiarPass);
exports.UsuarioRouter.put('/usuario', usuario_1.UsuarioController.updateUsuariobyId);
exports.UsuarioRouter.put('/usuario/darbaja/:usu_id', usuario_1.UsuarioController.darBajaUsuarioById);
exports.UsuarioRouter.post('/usuario/uploadavatar/:usu_id', multipartyMiddleware, usuario_1.UsuarioController.uploadImageAvatar);
