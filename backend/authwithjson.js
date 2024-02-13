//const bodyParser = require('body-parser');
const express=require('express');
const jwt=require('jsonwebtoken')
const jwtpass="nodeinuse"
const port=3002;
const app=express();

const ALL_USER=[

    {
        username:"vishal@gmail.com",
        password:"root@123",
        name:"vishal"
    },

    {
        username:"vishal1@gmail.com",
        password:"root@123",
        name:"vishal1"
    },

    {
        username:"vishal2@gmail.com",
        password:"root@123",
        name:"vishal2"
    }


]

function usercheck(username,password){
    const user=ALL_USER.find(user=>user.username==username);
    
    if(user){
        return true;
    }
    else{
        return false;
    }
}


app.use(express.json())

app.post("/signin",(req,res)=>{

        const username=req.body.username;
        const password=req.body.password;

       if(!usercheck(username,password)){
            return res.status(403).json({
                msg:"user do not exist"
            });
       }

       var token=jwt.sign({username:username},jwtpass);
       return res.json({
            msg:`welcome user ${username}`,
            token:token
       });

});

app.get("/users",(req,res)=>{

    const token=req.headers.authorization;

    try{
        const decoded =jwt.verify(token,jwtpass);
        const username=decoded.username;

        res.json({
            username
        });
    }

    catch(error){

        res.json({
            msg:"Invalid JSON Token"
        });
    }

});




app.listen(port);