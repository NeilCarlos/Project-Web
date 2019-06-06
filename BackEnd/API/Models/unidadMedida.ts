import{Sequelize,DataTypes} from 'sequelize';
export var unidadMedida_model=(sequelize:Sequelize)=>{
    var unidadMedida_model=sequelize.define('t_unidad_medida',{
        inimed_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        unimed_simbolo:{
            type:DataTypes.STRING(5),
            allowNull:true
        },
        unimed_descripcion:{
            type:DataTypes.STRING(100),
            allowNull:true
        }
    },{
        timestamps:false,
        tableName:'t_unidad_medida'
    });
    return unidadMedida_model;
}