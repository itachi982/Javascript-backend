// let answer=1;

// for(let x=0 ;x<100;x++){

//     answer++;
// }
// console.log(answer);


//const personArray=["vishal","bae","asdsad"];

//console.log(personArray[0]);

// for(let i=0;i<personArray.length;i++){
//     console.log(personArray[i]);

// }


// let sum=0;

// for(let x=0;x<1000000000000000;x++){
//     sum+=1;
// }
// console.log(sum);

// function sum(num1,num2,fntocall){
//     let result=num1+num2;
//     fntocall(result)
// }

// function add(result){
//     console.log (result);
// }

// sum(3,4,add);
function calculateArithmatic(a,b,func){

    const ans=func(a,b);
    return ans;

}

// function vishal(){
//     console.log("vishal");
// }

// function sum(a,b){
//     return a+b;
// }

// function minus(a,b){
//     return a-b;
// }



// const value=calculateArithmatic(5,6,minus);

// //setInterval(vishal,1*1000)
// // vishal();

// console.log(value);


let str="vishal,patasriya";

let ans= str.toUpperCase();

console.log(ans);

console.log(parseInt("56.89"))

let arr=[1,2,3,4];

let arr1=[5,6,7,8,9]

//arr.push(arr1)

//console.log(arr);

const arr2=arr.concat(arr1);

console.log(arr2);


//IMP 
//iteration by callback function

function log(str){
    console.log(str);
}

arr2.forEach(log)

