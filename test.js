// console.log("vishal");

const fs =require('fs');

// fs.readFile('/etc/passwd','utf-8', function(err, data){
//         console.log(data);
// })
// console.log('vsiahl');

//promise

// function Rdata(){
//     return new Promise(function(resolve){
//         fs.readFile('/etc/passwd','utf-8',function(err,data){
//         resolve(data);  

//         });
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// Rdata().then(onDone);

//Async Await

function  dosmthing(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi therer")
        },1000);
    })
}   


async function vis(){
    let x = await dosmthing();
    console.log(x);
}

vis();