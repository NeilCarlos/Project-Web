"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../Configuracion/sequelize");
const express_1 = __importDefault(require("express"));
// Importando Rutas de API
const usuario_1 = require("./../Routes/usuario");
const publicacion_1 = require("../Routes/publicacion");
const oferta_1 = require("../Routes/oferta");
const calificacion_1 = require("../Routes/calificacion");
const cita_1 = require("../Routes/cita");
const mensaje_1 = require("../Routes/mensaje");
const categoria_1 = require("../Routes/categoria");
class Server {
    constructor() {
        this.app = express_1.default();
        this.PUERTO = process.env.PORT || 3700;
        this.ConfigurarBodyPArser();
        this.configurarCORS();
        this.asignarRutas();
    }
    // config BodyPArser
    ConfigurarBodyPArser() {
        var BodyPArser = require('body-parser');
        this.app.use(BodyPArser.urlencoded({ limit: '16mb', extended: true }));
        this.app.use(BodyPArser.json({ limit: '16mb', extended: true }));
    }
    configurarCORS() {
        this.app.use((req, res, next) => {
            //Reglas
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
            res.header('Allow', 'GET,POST,PUT,DELETE');
            next();
        });
    }
    asignarRutas() {
        this.app.get('/', (req, res) => {
            res.send("Backend Ecollect corriendo");
        });
        this.app.use('/api', usuario_1.UsuarioRouter);
        this.app.use('/api', publicacion_1.PublicacionRouter);
        this.app.use('/api', oferta_1.OfertaRouter);
        this.app.use('/api', calificacion_1.HCalificacionRouter);
        this.app.use('/api', cita_1.CitaRouter);
        this.app.use('/api', mensaje_1.MensajeRouter);
        this.app.use('/api', categoria_1.CategoriaRouter);
    }
    IniciarServidor() {
        let port = this.PUERTO;
        this.app.listen(port, function () {
            console.log(`Servidor corriendo en el puerto ${port}`);
            sequelize_1.sequelize.sync({ force: false }).then(() => {
                console.log('Base de datos creada con exito');
            }).catch((error) => {
                console.log("Error ...... " + error);
            });
        });
    }
}
exports.default = Server;
