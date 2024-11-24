const express=require('express');
const UserCredits=require('../models/userCredit');
const router=express.Router();

router.post('/credit',async(req,res)=>{
    const{userId,refundAmount}=req.body;
    if(!userId||!refundAmount)
    {
        return res.status(400).json({message:'User ID and refund Amount are required'});
    }
    let creditAmount=refundAmount*1.1;
    creditAmount=parseFloat(creditAmount.toFixed(2));
    try
    {
        let userCredit=await UserCredits.findOne({where:{user_id:userId}});

        if(!userCredit)
        {
            userCredit=await UserCredits.create({
                user_id:userId,
                credits:creditAmount
            });
        }
        else
        {
            userCredit.credits+=creditAmount;
            await userCredit.save();
        }
        res.status(200).json({message:'Store credit applied successfully',newCredits:userCredit.credits});
    }
    catch(error)
    {
        console.error('Error applying store credit: ',error);
        res.status(500).json({message:'An error occured while processing your store credit'});
    }
});

module.exports=router;