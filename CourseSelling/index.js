const express=require("express")
const body_parser=require('body-parser');
const app=express();
const port=3000;
//routes

const adminRouter=require("./routes/adminRouter");
const userRouter=require("./routes/userRouter");


//app.use(body_parser.json());
app.use(express.json());
//app.use("/admin",adminRouter);
app.use("/users",userRouter);


app.listen(port,()=>{
    console.log(`server is running on Port ${port}`);
});