import {Sequelize,DataTypes} from 'sequelize';
export var foto_model=(sequelize:Sequelize)=>{
    var foto_model=sequelize.define('t_foto',{
        fot_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        fot_img:{
            type:DataTypes.TEXT,
            allowNull:true
        }
    },{
        timestamps:false,
        tableName:'t_foto'
    });
    return foto_model;
}