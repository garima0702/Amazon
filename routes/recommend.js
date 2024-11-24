const express=require('express');
const Product=require('../models/product');
const recommend=require('../utils/recommend');
const router=express.Router();

router.get('/recommend/:productId',async(req,res)=>{
    const {productId}=req.params;
    try
    {
        const product=await Product.findByPk(productId);
        if(!product)
        {
            return res.status(404).json({message:'Product not found'});
        }
        const recommendation=recommend(product);

        res.status(200).json({
            productId:product.id,
            recommendation,
        });
    }
    catch(error)
    {
        console.error('Error fetching recommendation: ',error);
        res.status(500).json({message:'Error fetching recommendation'});
    }
});

module.exports=router;