let timer;
let elapsedTime = 0;
let isRunning = false;
let laps = [];

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function updateTime() {
    elapsedTime += 1;
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

startStopButton.addEventListener('click', function() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Pause';
    } else {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', function() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    laps = [];
    lapsList.innerHTML = '';
});

lapButton.addEventListener('click', function() {
    if (isRunning) {
        const lapTime = display.textContent;
        laps.push(lapTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.length}: ${lapTime}`;
        lapsList.appendChild(lapItem);
    }
});
