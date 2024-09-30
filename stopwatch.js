var startButton = document.querySelector('[data-action="start"]');
var stopButton = document.querySelector('[data-action="stop"]');
var resetButton = document.querySelector('[data-action="reset"]');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var timerTime = 0;
var isRunning = false;
var interval;
function startTimer() {
    if (isRunning)
        return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}
function stopTimer() {
    if (!isRunning)
        return;
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
    stopTimer();
    timerTime = 0;
    if (minutes && seconds) {
        minutes.textContent = '00';
        seconds.textContent = '00';
    }
}
function incrementTimer() {
    timerTime++;
    var numOfMinutes = Math.floor(timerTime / 60);
    var numOfSeconds = timerTime % 60;
    if (minutes && seconds) {
        minutes.textContent = pad(numOfMinutes);
        seconds.textContent = pad(numOfSeconds);
    }
}
function pad(number) {
    return (number < 10) ? '0' + number : '' + number;
    // if (number < 10) {
    //     return '0' + number;
    // } else {
    //    return number;
    // }
}
if (startButton) {
    startButton.addEventListener('click', startTimer);
}
if (stopButton) {
    stopButton.addEventListener('click', stopTimer);
}
if (resetButton) {
    resetButton.addEventListener('click', resetTimer);
}
