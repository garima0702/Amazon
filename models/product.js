const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../db1');

const Product=sequelize.define(
    'Product',
    {
        name:
        {
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:
        {
            type:DataTypes.TEXT
        },
        price:
        {
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        category:
        {
            type:DataTypes.STRING
        },
        image_url:
        {
            type:DataTypes.STRING
        },
        condition:
        {
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isIn:[['new','gently used','refurbished']]
            },
            toDefaultValue:'new'
        },
    },
    {
        tableName:'products',
        timestamps:true,
    }
);

module.exports=Product;