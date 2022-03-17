const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours()
}

getClock();
setInterval(getClock, 1000);