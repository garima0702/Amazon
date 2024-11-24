const express=require('express');
const router=express.Router();
const RepairRequest=require('../models/repairRequest');
const sequelize = require('../db');

//Repair Request Submission
router.post('/repair',async(req,res)=>{
    let transaction;
    try
    {
        const{productId,userId,repairDetails}=req.body;
        if(!productId||!userId)
        {
            return res.status(400).json({message:'Product ID and User ID are required'});
        }
        transaction=await sequelize.transaction();
        const newRepairRequest=await RepairRequest.create({
            user_id:userId,
            product_id:productId,
            repair_details:repairDetails,
        },{transaction});
        //Automatically change status to 'success'

        await newRepairRequest.update({status:'success'},{transaction});
        await transaction.commit();
        res.json({
            mesage:'Repair request submitted successfully',
            data:newRepairRequest
        });
    }
    catch(error)
    {
        if(transaction)
        {
            await transaction.rollback();
        }
        console.error('Error creating repair request',error);
        res.status(500).json({message:'An error occured while processing your request',error:error.message});
    }
});

module.exports=router;