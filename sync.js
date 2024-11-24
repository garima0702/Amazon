const sequelize=require('./db');
const repairRequest=require('./models/repairRequest');

//Syncing the model to create table

async function syncDatabase()
{
    repairRequest.sync({alter:true})
        .then(()=>console.log('repair_request table created'))
        .catch((error)=>console.error('Error creating table:',error));
}

syncDatabase();