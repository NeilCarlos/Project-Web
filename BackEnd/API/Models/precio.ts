import{Sequelize,DataTypes} from 'sequelize';
export var precio_model=(sequelize:Sequelize)=>{
    var precio_model=sequelize.define('t_precio',{
        prec_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        prec_sugerido:{
            type:DataTypes.DECIMAL(5,2),
            allowNull:true
        }        
    },{
        timestamps:false,
        tableName:'t_precio'
    });
    return precio_model;

}