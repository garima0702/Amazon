const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const RepairRequestRoutes=require('./routes/repairRequest');
const ProductRoutes=require('./routes/product');

const app=express();
const port=5000;

const allowedOrigins=['http://localhost:5500','null'];
app.use(cors({
    origin:function(origin,callback){
        if(!origin||allowedOrigins.indexOf(origin)!==-1)
        {
            callback(null,true);
        }
        else
        {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
}));

app.options('*',cors());

app.use(bodyparser.json());

app.use('/returns',RepairRequestRoutes);
app.use('/products',ProductRoutes);

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});