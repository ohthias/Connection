let workTime = 25 * 60 * 1000;
let breakTime = 5 * 60 * 1000; 
let isWorkSession = true;
let timeLeft = workTime
let tInterval
let running = false
let timerDisplay = document.getElementById('timer');
let controlButton = document.getElementById('controlButton')

function controlTimer() {
    if (!running) {
        startTimer()
    } else {
        pauseTimer()
    }
}

function startTimer() {
    tInterval = setInterval(updateTimer, 1000)
    running = true
    controlButton.innerHTML = "Parar"
}

function updateTimer() {
    timeLeft -= 1000

    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
    let seconds = Math.floor((timeLeft / 1000) % 60)

    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    timerDisplay.innerHTML = minutes + ":" + seconds

    if (timeLeft <= 0) {
        clearInterval(tInterval)
        running = false
        isWorkSession = !isWorkSession;
        timeLeft = isWorkSession ? workTime : breakTime
        controlButton.innerHTML = "Inciar"
        alert(isWorkSession ? "Hora de trabalhar!" : "Hora de descansar!")
    }
}

function pauseTimer() {
    clearInterval(tInterval)
    running = false;
    controlButton.innerHTML = "Continuar"
}