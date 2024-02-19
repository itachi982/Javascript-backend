//import { PrismaClient } from '@prisma/client'

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const express=require("express")
const router=express.Router();
const userMiddleware=require("../middlewares/userMiddleware");


//user routes

router.post("/signup",async (req,res)=>{

    try{
        const dusername=req.headers.username;
        const dpassword=req.headers.password;

        await prisma.user.create({
            data:{
                username:dusername,
                password:dpassword
            }
        })

        res.json({
            msg:"user created successfully"
        })
    }
    catch(error){
        console.log(error);
        res.send("error");
    }
});


router.get("/courses",userMiddleware,async (req,res)=>{

    const courses=await prisma.course.findMany();
    res.send(courses);


});

router.post("/courses/buy",userMiddleware,async (req,res)=>{

    try{   
        const dusername=req.headers.username;
        const courseid=parseInt(req.query.courseid);

        console.log(dusername,courseid);

        const user=await prisma.user.findUnique({
            where:{
                username:dusername
            }
        })

        const userid=user.id;

        
        const existingPurchase = await prisma.userCourse.findFirst({
        where: {
            userId:userid,
            courseId:courseid
            },
        });
        console.log(existingPurchase);
    
        if (existingPurchase) {
            res.send('Course already purchased by user');
        }else{

        
            const course = await prisma.course.findUnique({
            where: {
                id: courseid,
            },
            });
        
            if (!course) {
            res.send('Course not found');
            }else{


                await prisma.userCourse.create({
                    data:{
                        userId:userid,
                        courseId:courseid
                    }
                })
                
                res.json({
                    message: 'Course purchased successfully'
                })
               
            }
        }

        
    }
    catch(error){
        res.status(500).send("Internal Error");
        console.log(error);
    }

})


router.get("/purchasedCourses",userMiddleware,async (req,res)=>{

    const dusername=req.headers.username;
    
    const user=await prisma.user.findUnique({
        where:{
            username:dusername
        }
    })

    const userid=user.id;

    const boughtCourses = await prisma.user.findUnique({
        where: { id: userid },
        select: {
          purchasedCourse: {
            select: {
              course: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                  imageLink:true,
                  price:true,
                  published:true
                  // Include other desired course details
                },
              },
            },
          },
        },
    });


    res.json({
        boughtCourses
    })
})

module.exports = router;