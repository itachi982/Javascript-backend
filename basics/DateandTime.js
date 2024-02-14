

function time(){
    const currentDate=new Date();

    let DD=currentDate.getDate();
    let M=currentDate.getMonth();
    let Y=currentDate.getFullYear();
    let hh=currentDate.getHours();
    let mm=currentDate.getMinutes();
    let ss=currentDate.getSeconds();
    let Mm=currentDate.getMilliseconds();

    console.log("Time : "+hh+":"+mm+":"+ss+":"+Mm);
    console.log("Date :"+  DD+"/"+M+"/"+Y)

}

setInterval(time,1000);