let hours, minutes, seconds, now;
let hoursSpan, minutesSpan, secondsSpan;

hoursSpan = document.getElementById("hours");
minutesSpan = document.getElementById("minutes");
secondsSpan = document.getElementById("seconds");


function formatTime() {
    const d = new Date();
    const hours = formatDigit(d.getHours());
    const minutes = formatDigit(d.getMinutes());
    const seconds = formatDigit(d.getSeconds());

    // 12 hour clock
    let timeString = hours + "|" + minutes + "|" + seconds;
    timeString += (hours >= 12) ? " PM" : " AM";

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

window.setInterval(setTime, 1000);