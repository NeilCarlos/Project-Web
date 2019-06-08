// USUARIO CONTROLER
import { Request, Response } from 'express';
import { Usuario } from './../Configuracion/sequelize';

export var UsuarioController = {

    loginUsuario: (req: Request, res: Response) => {
        //BuscarUsuario
        let { usu_email, usu_pass } = req.body;
        Usuario.findOne({
            where: {
                usu_email: usu_email
            }
        }).then((usuario_encontrado: any) => {
            if (usuario_encontrado) {
                //Validar Password
                if (usuario_encontrado.ValidarPassword(usu_pass)) {
                    res.status(200).send({
                        message: 'ok',
                        token: usuario_encontrado.generarJWT()
                    });
                } else {
                    res.status(500).json({
                        message: 'error',
                        content: 'usuario o pasword incorrectos'
                    });
                }
            }
            else {
                res.status(500).json({
                    message: 'error',
                    content: 'usuario o pasword incorrectos'
                });
            }
        });

    },
    cambiarPass: (req: Request, res: Response) => {
        let { usu_email, usu_pass, new_pass } = req.body;
        Usuario.findOne({
            where: {
                usu_email: usu_email
            }
        }).then((usuario_encontrado: any) => {
            if (usuario_encontrado) {
                if (usuario_encontrado.ValidarPassword(usu_pass)) {
                    
                    // Cambiar password                    
                    usuario_encontrado.setSaltAndHash(new_pass);
                    Usuario.update({
                        usu_salt:usuario_encontrado.usu_salt,
                        usu_hash:usuario_encontrado.usu_hash
                    },{ where: { usu_id: usuario_encontrado.usu_id } }).then((datos_actualizados: any) => {
                        if (datos_actualizados > 0) {
                            res.status(200).json({
                                message: "updated",
                                content: datos_actualizados
                            });
                        } else {
                            res.status(400).json({
                                message: "not updated",
                                content: null
                            });
                        }
                    });                    
                } else {
                    res.status(500).json({
                        message: 'error',
                        content: 'usuario o pasword incorrectos'
                    });
                }
            }
            else {
                res.status(500).json({
                    message: 'error',
                    content: 'usuario o pasword incorrectos'
                });
            }
        });

    },
    getUsuarioById: (req: Request, res: Response) => {
        const { idusuario } = req.params;
        Usuario.findByPk(idusuario).then((usuario: any) => {
            if (usuario) {
                res.status(200).json({
                    message: "found",
                    content: usuario
                });
            }
            else {
                res.status(500).json({
                    message: "not found",
                    content: null
                })
            }
        });
    },
    updateUsuariobyId:(req: Request, res: Response)=>{
        // let{usu_id,usu_nombre,usu_urlimagen,usu_email,usu_telefono,usu_tiposesion,usu_lng,usu_lat,usu_tipousu,usu_avatar}=req.body;

        // let updateusuario={
        //     usu_nombre:usu_nombre,
        //     usu_urlimagen:usu_urlimagen,
        //     usu_email:usu_email,
        //     usu_telefono:usu_telefono,
        //     usu_tiposesion:usu_tiposesion,
        //     usu_lng:usu_lng,
        //     usu_lat:usu_lat,
        //     usu_tipousu:usu_tipousu,
        //     usu_avatar:usu_avatar
        // }
        Usuario.update(req.body, {where: {usu_id:req.body.usu_id}}).then((datos_actualizados:any)=>{            
            
            if(datos_actualizados[0]>0){
                res.status(200).json({
                    message:"updated",
                    content:datos_actualizados[0]
                });
            }else{
                res.status(400).json({
                    message:"not updated",
                    content:null
                });
            }
        });
    },
    darBajaUsuarioById:(req: Request, res: Response)=>{
        let{usu_id}=req.params;
        
        Usuario.update({usu_estado:'i'}, {where: {usu_id:usu_id}}).then((datos_actualizados:any)=>{
            if(datos_actualizados[0]>0){
                res.status(200).json({
                    message:"updated",
                    content:datos_actualizados[0]
                });
            }else{
                res.status(400).json({
                    message:"not updated",
                    content:null
                });
            }
        });
    },
    createUsuario: (req: Request, res: Response) => {
        //Verificando que el email no se repita
        Usuario.findAll({
            where: {
                usu_email: req.body.usu_email
            }
        }).then((resultado: any) => {
            console.log(resultado);

            if (resultado[0] == null) {
                const nusuario = Usuario.build(req.body);
                nusuario.setSaltAndHash(req.body.usu_pass);
                nusuario.save().then((usuariocreado: any) => {
                    if (usuariocreado) {
                        res.status(200).json({
                            message: "created",
                            content: usuariocreado
                        });
                    } else {
                        res.status(500).json({
                            message: "not created",
                            content: null
                        });
                    }
                });
            } else {
                res.status(500).json({
                    message: `Failed, El usuario con email ${req.body.usu_email} ya esta registrado.`,
                    content: null
                })
            }
        });
    },
    createSocialRegister: (req: Request, res: Response) => {
        
        Usuario.findAll({
            where: {
                usu_email: req.body.usu_email
            }
        }).then((resultado: any) => {            

            if (resultado[0] == null) {
            
                Usuario.create(req.body).then((retorno:any)=>{
                    if(retorno){
                        res.status(201).json({
                            message:"ok",
                            content:retorno
                        });
                    }else{
                        res.status(500).json({
                            message:'error',
                            content:null
                        });
                    }
                });                                
                
            } else {
                res.status(500).json({
                    message: `Failed, El usuario con email ${req.body.usu_email} ya esta registrado.`,
                    content: null
                })
            }
        });
    },
}
