let sum=20;

// for(let i=0;i<50;i++){
//     sum+=i;
// }
 
console.log(sum);



//Functions 

function sumone(x){
    let sum=10;
    let ans=0;
    for(let i=1;i<=x;i++)
    ans+=i;
    return sum;
}

console.log(sum);
console.log(sumone(10));



function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumofsomething(a,b,fn){
    let var1=fn(a);
    let var3=fn(b);
    let sum=var1+var3;
    return sum;    
}

let var1=sumofsomething(2,2,cube);
console.log(var1);