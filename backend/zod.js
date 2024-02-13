const z=require("zod");

//const schema=z.array(z.number());

const schema=z.object({
    "email":z.string().email(),
    "password":z.string().min(8)
})


//let arr=[1,23,4,5];

let object={
    "email":"vishalpatsariya99@gmail.com",
    "password":"root@123"
}

const result=schema.safeParse(object);

if(result.success!=true){
    console.log("Invalid input");
}
else{
    console.log("success");
    console.log("Your input is "+result.data.email+" "+result.data.password);
}