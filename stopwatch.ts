const startButton: HTMLElement | null = document.querySelector('[data-action="start"]');
const stopButton: HTMLElement | null = document.querySelector('[data-action="stop"]');
const resetButton: HTMLElement | null = document.querySelector('[data-action="reset"]');
const minutes: HTMLElement | null = document.querySelector('.minutes');
const seconds: HTMLElement | null = document.querySelector('.seconds');

let timerTime: number = 0o0;
let isRunning: boolean = false;
let interval: number;


function startTimer() {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if (!isRunning) return;
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
    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;
    if (minutes && seconds) {
        minutes.textContent = pad(numOfMinutes);
        seconds.textContent = pad(numOfSeconds);
    }
}

function pad(number: number): string {
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