let hours, minutes, seconds, now;
let hoursSpan, minutesSpan, secondsSpan;

hoursSpan = document.getElementById("hours");
minutesSpan = document.getElementById("minutes");
secondsSpan = document.getElementById("seconds");


function setDate() {
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const dateCell = document.getElementById('date');
    const d = new Date();
    dateCell.textContent = days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate();
}

function formatTime() {
    const d = new Date();
    const hours = formatDigit(d.getHours());
    const minutes = formatDigit(d.getMinutes());
    const seconds = formatDigit(d.getSeconds());

    // 12 hour clock
    let timeString = hours + ":" + minutes;
    // timeString += (hours >= 12) ? " PM" : " AM";

    return timeString;
}

function formatDigit(digit) {
    return digit < 10 ? "0" + digit : digit;
}


function setTime() {
    const timeCell = document.getElementById('time');
    let time = formatTime();
    timeCell.innerHTML = time;
}

function setTemperature() {
    const tempCell = document.getElementById('temp');
    
}

setDate();
window.setInterval(setTime, 1000);