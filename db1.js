const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('amazon','postgres','Password#1234',{
    host:'localhost',
    dialect:'postgres',
    logging:console.log,
});

module.exports=sequelize;