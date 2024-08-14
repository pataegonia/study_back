const clock = document.querySelector("#clock")

function getClock(){
    const date = new Date();
    const sec = date.getSeconds().toString().padStart(2,"0");
    const min = date.getMinutes().toString().padStart(2,"0");
    const hour = date.getHours().toString().padStart(2,"0");
    const time= `${hour}:${min}:${sec}`
    clock.innerText=time
}

getClock();
setInterval(getClock,1000);