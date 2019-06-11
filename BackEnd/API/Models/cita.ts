import {Sequelize,DataTypes} from 'sequelize';
export var cita_model=(sequelize:Sequelize)=>{
    var cita_model=sequelize.define('t_cita',{
        cita_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        cita_ubicacion:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        cita_hora:{
            type:DataTypes.DATE,
            allowNull:true
        },
        cita_fecha:{
            type:DataTypes.DATE,
            allowNull:true
        },
        cita_estado:{
            type:DataTypes.STRING(1),
            allowNull:true
        }
    },
    {
        timestamps:false,
        tableName:'t_cita'
    });
    return cita_model;
}