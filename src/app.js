require("dotenv").config();
const express=require("express");
const router=require("./routers");
const app=express();
const globalErrorHandler=require("./middlewares/globalErrorHandler");


app.use(express.json());
app.use("/api",router);
app.use((req,res)=>{
    res.status(404).json({message:"Route not found"});
});
app.use(globalErrorHandler);
module.exports=app;