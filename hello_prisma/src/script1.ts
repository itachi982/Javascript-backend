import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function query() {
    try {
        const Newuser=await prisma.user.create({
            data: {
                email: "vishalpatsariya899@gmail.com",
                name: "vishal"
            }
        });

        console.log(Newuser);
    } catch (error) {
        console.error("Error creating user:", error);
    } finally {
        await prisma.$disconnect();
    }
}


async function allUsers(){
    const allUsers=await prisma.user.findMany();
    console.log(allUsers);
}

query();
//allUsers();