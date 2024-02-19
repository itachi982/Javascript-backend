const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();



async function query(){

    const user=await prisma.user.findUnique({
        where:{
            username:"vishal"
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
                  // Include other desired course details
                },
              },
            },
          },
        },
    });
    console.log(boughtCourses);
}

query();