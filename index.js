
// const fs=require('fs');
// fs.readFile("/etc/passwd","utf-8",function(err,data){
//     console.log(data);
// })
const express=require("express");
const bodyparse=require("body-parser");
const app=express();
const port=6969;
let output,error;
app.use(bodyparse.json());


app.post("/addAccount",function(req,res){

    const auth=req.headers["auth"];
    res.json({
        "message":"Done ",
        "Auth Token": auth
    })
})

app.get("/test",function(req,res){
    res.json({
        "name":"vishal patsariya",
        "age":23
    })
})

app.get("/",function(req,res){
    res.send("vishal");
   
})

app.get("/query",function(req,res){
     
    const query=req.query.q;

    var exec = require('child_process').exec;

exec(query,function (error, stdout, stderr) {
        output=stdout;
        error=error;
        //console.log(output);
    });

    console.log(output);

    if(error!=null){
        res.send("There was a problem to run your command ,The error is "+error );
        
    }
    else{
       
        res.send(output);
    }

})

app.listen(port);


