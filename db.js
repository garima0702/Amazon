const {Sequelize}=require('sequelize');

//Setting up the sequelize instance

const sequelize=new Sequelize('amazon','postgres','Password#1234',{
    host:'localhost',
    dialect:'postgres',
    logging:console.log,
});

//Testing the connection
async function testConnection()
{
    try
    {
        sequelize.authenticate();
        console.log('Connection established sucessfully');
    }
    catch(error)
    {
        console.error('Unable to connect',error);
    }
}

testConnection();

module.exports=sequelize;