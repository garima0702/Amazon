const {Sequelize,DataTypes}=require('sequelize');
const sequelize = require('../db');

const repairRequest=sequelize.define('repair_request',{
    user_id: 
    {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    product_id:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    request_date:
    {
        type:DataTypes.DATE,
        defaultValue:Sequelize.NOW,
    },
    status:
    {
        type:DataTypes.STRING,
        defaultValue:'pending',
    },
    repair_details:
    {
        type:DataTypes.TEXT,
        allowNull:true,
    },
},{
    tableName:'repair_request',
    timestamps:true,
});

module.exports=repairRequest;