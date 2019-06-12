import{ Sequelize,DataTypes} from 'sequelize';
export var mensaje_model=(sequelize:Sequelize)=>{
    var mensaje_model=sequelize.define('t_mensaje',{
        men_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        men_mensaje:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        men_fecha:{
            type:DataTypes.DATE,
            allowNull:false
        }
    },
    {
        timestamps:false,
        tableName:'t_mensaje'
    });
    return mensaje_model;
}