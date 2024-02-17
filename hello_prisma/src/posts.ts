import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
//const prisma = new PrismaClient({log:['info','query'],}); //log version

async function createUser() {
    try {
        const Newuser=await prisma.post.create({
            data: {
                title:"the good book",
                content:"asdasdadsad",
                published:true,
                authorid:1
            }
        });

        console.log(Newuser);
    } catch (error) {
        console.error("Error creating user:", error);
    } finally {
        await prisma.$disconnect();
    }
}

async function readUser(){  //join in prisma

    const user=await prisma.user.findUnique({
        where:{
            id:2
        },
        include:{
            posts:true
        }
    })

    console.log(user);

}

async function updateuser(){

    await prisma.user.update({
        where:{
            id:1
        },
        data :{
            name:"sexyboi",
            id:2
        }
    })

    readUser();


}

//delete all user who does not have any posts

async function deleteUser(){

    const usertodelete=await prisma.user.findMany({
        where:{
            posts:{
                none:{},
            },
        },
    
    })

    for(let i=0;i<usertodelete.length;i++){
        await prisma.user.delete({
            where:{
                id:usertodelete[i].id
            }
        })
    }
    
}



//createUser();
//readUser();
//updateuser();
//deleteUser();
