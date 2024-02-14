const express=require('express');
const jwt=require('jsonwebtoken')
const db=require('mongoose')
const z=require('zod');
const dburl="mongodb+srv://root:Vishal98273078@cluster0.ulhnzdz.mongodb.net/user_app";
const jwtpass="nodeinuse"
const port=6970;
const app=express();

const user = db.model('users',{
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => z.string().email().safeParse(value).success,
            message: props => `${props.value} is not a valid email address!`
        }
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: value => z.string().min(8).safeParse(value).success,
            message: props => `${props.value} is not a valid password!`
        }
    },
    token: String
});


app.use(express.json());


app.post('/signup',async(req,res)=>{


    const dusername=req.body.username;
    const dname=req.body.name;
    const dpassword=req.body.password;
    
    //const existinguser=user.findOne({username:dusername});
   
    //res.json({existinguser});

    await(db.connect(dburl));

    const token=jwt.sign({name:dname,username:dusername},jwtpass);
    
   
    try{
        const newuser=new user({
            name:dname,
            username:dusername,
            password:dpassword,
            token:token
        });

        await newuser.save().then(()=>{
            res.send("Succefully created user ");
        });
    }
    catch(error){
        res.json({
            error
        });
    }


})

app.listen(port);

