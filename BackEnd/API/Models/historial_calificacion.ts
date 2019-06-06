import{Sequelize,DataTypes} from 'sequelize';
export var historialCalificacion_model=(sequelize:Sequelize)=>{
    var historialCalificacion_model=sequelize.define('t_historia_calificacion',{
        calif_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        calif_puntuacion:{
            type:DataTypes.DECIMAL(5,2),
            allowNull:true
        },
        calif_observacion:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        calif_perfil:{
            type:DataTypes.STRING(20),
            allowNull:true
        }
    },
    {
        timestamps:false,
        tableName:'t_historia_calificacion'
    });
    return historialCalificacion_model;
}