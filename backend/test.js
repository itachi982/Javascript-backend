const jwt=require('jsonwebtoken');
const jwtpass="nodeinuse";

try{
    const tokn=jwt.sign({username:"vishal"},jwtpass.toString('utf-8'));

    console.log(tokn);
}
catch(error){
    console.log(error);
}
