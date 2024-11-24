const recommend=(product)=>{
    if(!product||typeof product!='object')
    {
        return 'Invalid product data provided';
    }
    if(product.category=='Electronics')
    {
        return 'Try our repair services!';
    }
    else if(product.category=='new')
    {
        return 'Consider an Exchange';
    }
    else if(product.category=='gently used')
    {
        return 'Check out resale marketplace';
    }
    else if(product.category=='damaged')
    {
        return 'Recycle this item!';
    }

    return 'Explore our Sustainable Options!';
};

module.exports=recommend;