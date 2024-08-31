let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let timerDisplay = document.getElementById('timer');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTimer, 1);
        running = true;
    }
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    timerDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    timerDisplay.innerHTML = "00:00:00";
}
