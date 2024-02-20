const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const adminMiddleware=require("../middlewares/adminMiddleware")

const express=require('express');
const { cp } = require('fs');
const router=express.Router();

//admin routes

router.post("/signup",async(req,res)=>{

    try{
        const dusername=req.headers.username;
        const dpassword=req.headers.password;

        const alreadyExist=await prisma.admin.findFirst({
            where:{
                username:dusername,
                password:dpassword
            }
        })

        if(alreadyExist){
            res.json({
                message:`${dusername} already registed please Login`
            })
        }else{

            const newAdmin=await prisma.admin.create({
                data:{
                    username:dusername,
                    password:dpassword
                }
         })
            res.json({
                message:`${dusername} succefully registered`
            })
        }
    }
    catch(error){
        res.send("internal error"); 
    }
    
   


})

router.post("/courses",adminMiddleware,async (req,res)=>{

    const ctitle=req.body.title;
    const cdescription=req.body.description;
    const cprice=req.body.price;
    const cimagelink=req.body.imagelink;

    //console.log(ctitle,cdescription,cprice,cimagelink);

    const alreadyexist=await prisma.course.findUnique({
        where:{
            title:ctitle
        }
    })


    if(alreadyexist){
        res.json({
            message:"course with same title already exists"
        })
    }else{

        try{
            await prisma.course.create({
                data:{
                    title:ctitle,
                    description:cdescription,
                    price:cprice,
                    imageLink:cimagelink,
                    published:true
                }
            }).then(async ()=>{
                const newCourse=await prisma.course.findFirst({
                        where:{
                            title:ctitle
                        }
                })
                const newCourseId=newCourse.id;
                res.json({
                    message: 'Course created successfully', 
                    courseId: newCourseId 
                })
            })
        }
        catch(error){
            res.json({
                message:"internal error"
            })
            console.log(error);
        }


    }

})

router.get("/courses",adminMiddleware,async (req,res)=>{
    const courses=await prisma.course.findMany();
    res.send(courses);

})

module.exports=router;
