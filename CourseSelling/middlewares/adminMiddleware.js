const { PrismaClient } = require('@prisma/client');

//const prisma = new PrismaClient();

async function adminMiddleware(req,res,next){

    const dusername=req.headers.username;
    const dpassword=req.headers.password;
    
    const admin=await prisma.admin.findMany({
        where:{
            username:dusername,
            password:dpassword
        }
    })

    if(admin){
        next();
    }
    else{
        res.status(403).json({
            msg:"admin does not exist"
        })
    }
}

module.exports=adminMiddleware;