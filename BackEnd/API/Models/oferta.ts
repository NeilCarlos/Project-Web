import{Sequelize,DataTypes} from 'sequelize';
export var oferta_model=(sequelize:Sequelize)=>{
    var oferta_model=sequelize.define('t_oferta',{
        ofer_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        ofer_precio_oferta:{
            type:DataTypes.DECIMAL(5,2),
            allowNull:true
        },
        ofer_comentario:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        ofer_fecha:{
            type:DataTypes.DATE,
            allowNull:true
        },
        ofer_estado:{
            type:DataTypes.STRING(1),
            allowNull:true
        }
    },
    {
        timestamps:false,
        tableName:'t_oferta'
    });
    return oferta_model;
};