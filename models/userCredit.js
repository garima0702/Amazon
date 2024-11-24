const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../db2');

const UserCredits=sequelize.define('UserCredits',{
    user_id:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    credits:
    {
        type:DataTypes.DECIMAL(10,2),
        defaultValue:0,
    },
    updated_at:
    {
        type:DataTypes.DATE,
        defaultValue:Sequelize.NOW,
    }
},
{
    tableName:'user_credits',
    timestamps:false,
});

module.exports=UserCredits;