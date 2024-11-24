const express=require('express');
const Product=require('../models/product');
const {Op}=require('sequelize');
const router=express.Router();

router.get('/resale',async (req,res)=>{
    try
    {
        const products=await Product.findAll({
            where:{
                condition:{
                    [Op.in]:['gently used','refurbished','new'],
                },
            },
        });
        res.json(products);
    }
    catch(error)
    {
        console.error('Error fetching products: ',error);
        res.status(500).json({Message:'Internal Server Error'});
    }
});

module.exports=router;