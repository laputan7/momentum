const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

//매초마다 호출
setInterval(getClock, 1000);