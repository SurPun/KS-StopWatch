// Global Variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset');

let secounds = 800;
let interval = null;


//Event listeners

start_btn.addEventListener('click', start);

//Update the timer

function timer () {
    secounds++;

    //Formate our time
    let hrs = Math.floor(secounds/ 3600);
    let mins = Math.floor((secounds - (hrs * 3600) / 60);
    let secs = secounds % 60;

    if (hrs < 10) secs = '0'+ hrs;
    if (mins < 10) secs = '0'+ mins;
    if (secs < 10) secs = '0'+ secs;

    time_el.innerHTML = `${hrs}:${mins};${secs}`;
}

function start(){
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}