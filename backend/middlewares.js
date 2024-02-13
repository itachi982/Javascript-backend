const express=require("express");

const app=express();
const port=3000;

function usercheck(req,res,next){

    const username=req.body.username;
    const password=req.body.password;

    if(username!="vishal"||password!="root@123"){
        res.status(403).json({
            "message":"Invalid Username or Password"
        })
    }
    else{
        next();
    }

}

app.use(express.json());

app.use(usercheck);

app.post("/checkcreads",(req,res)=>{
        const username=req.body.username;

        res.json({
            "message":`Logged in as ${username} `
        })
})

app.listen(port);