const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const RepairRequestRoutes=require('./routes/repairRequest');
const ProductRoutes=require('./routes/product');
const CreditRoutes=require('./routes/userCredit');
const RecommendRoutes=require('./routes/recommend');

const app=express();
const port=5000;

app.use(cors({
    origin:'http://127.0.0.1:5500'
}));

app.options('*',cors());

app.use(bodyparser.json());

app.use('/returns',RepairRequestRoutes);
app.use('/products',ProductRoutes);
app.use('/returns',CreditRoutes);
app.use('/product',RecommendRoutes);

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});