const express=require('express');
const { connection } = require('./config/db');
const route  = require('./router/product_router');
const app=express();
const cors=require('cors')
app.use(express.json());
app.use(cors({
    origin: "*"
}))

app.use("/api",route)


app.get("/",(req,res)=>{
    res.send('home page')
})

app.listen(7000,async ()=>{
    try{
        await connection()
        console.log('server is live at 7000 port number')
    }
    catch(err){
        console.log(err,'error occurred')
    }
})