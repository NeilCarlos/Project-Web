import {Sequelize,DataTypes} from 'sequelize';
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

export var usuario_model=(sequelize:Sequelize)=>{    
    var usuario_model=sequelize.define('t_usuario',{        
        usu_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        usu_nombre:{
            type: DataTypes.STRING(100),                        
            allowNull:false
        },
        usu_urlimagen:{
            type: DataTypes.TEXT,
            allowNull:true
        },
        usu_email:{
            type: DataTypes.STRING(100),
            allowNull:false
        },
        usu_telefono:{
            type: DataTypes.STRING(20),
            allowNull:true
        },
        usu_estado:{
            type: DataTypes.STRING(1),
            allowNull:false
        },
        usu_salt:{
            type: DataTypes.TEXT,
            allowNull:true
        },
        usu_hash:{
            type: DataTypes.TEXT,
            allowNull:true
        },
        usu_tiposesion:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        usu_lng:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:true
        },
        usu_lat:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:true
        },
        usu_tipousu:{
            type:DataTypes.STRING(1),
            allowNull:true
        },
        usu_calificacion:{
            type:DataTypes.DECIMAL(5,2),
            allowNull:true
        },
        usu_avatar:{
            type:DataTypes.TEXT('medium'),
            allowNull:true
        }
    },
    {        
        timestamps:false,
        tableName:'t_usuario'
    });    
    

    usuario_model.prototype.setSaltAndHash=function(password:any){    
        this.usu_salt=crypto.randomBytes(16).toString('hex');
        this.usu_hash=crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');    
    };

    //Validar pasword 
    usuario_model.prototype.ValidarPassword=function(password:any) {
        let hashTemp=crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');
        console.log(hashTemp);
        
        if(hashTemp===this.usu_hash)
        {
            return true;
        }
        else{
            return false;
        }
    };
    
    //Generar Token
    usuario_model.prototype.generarJWT=function(){
        let payload={
            usu_id:this.usu_id,
            usu_nombre:this.usu_nombre,
            usu_urlimagen:this.usu_urlimagen,
            usu_email:this.usu_email,
            usu_tiposesion:this.usu_tiposesion
        };

        var token=jwt.sign(payload,'ecollect',{expiresIn:'5h'},{algorithm: 'RS256'});
        return token;
    };

    return usuario_model;
};



