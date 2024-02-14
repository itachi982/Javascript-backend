const db=require('mongoose');
const dburl="mongodb+srv://root:Vishal98273078@cluster0.ulhnzdz.mongodb.net/user_app";
db.connect(dburl);

const user=db.model('users',
{
    name:String,
    username:String,
    password:String    
});

const newUser=new user({
    name:"vishal",
    username:"vishal@gmail.com",
    password:"12345678"
});

newUser.save().then(()=>console.log ("done"));