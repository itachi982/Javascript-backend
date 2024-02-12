const express=require("express");

const app=express();
const port=3000;

function usercheck(req,res,next){

    const username=req.headers.username;
    const password=req.headers.password;

    if(username!="vishal"||password!="root@123"){
        res.status(403).json({
            "message":"Invalid Username or Password"
        })
    }
    else{
        next();
    }

}
app.get("/checkcreads",usercheck,(req,res)=>{
        const username=req.headers.username;

        res.json({
            "message":`Logged in as ${username} `
        })
})

app.listen(port);