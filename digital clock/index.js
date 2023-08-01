const HourE1=document.getElementById("Hour");
const MinutesE1=document.getElementById("Minutes");
const SecondE1=document.getElementById("Seconds");
const ampmE1=document.getElementById("ampm");


function updateClock(){
    let h =new Date().getHours()
    let m =new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";
    if(h>12){
        h= h - 12;
        ampm = "PM";
    }
    h=h<10? "0" + h : h;
    m=m<10? "0" + m : m;
    s=s<10? "0" + s : s;



HourE1.innerText = h;
MinutesE1.innerText= m ;
SecondE1.innerText = s;
ampmE1, (innerText = ampm);
setTimeout(()=>{
updateClock()
}, 1000);

}

updateClock()