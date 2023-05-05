const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

let time = 1500; // 25 minutes
let timerId;

function startTimer() {
    timerId = setInterval(() => {
        time--;
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        timerEl.innerText = `${minutes}:${seconds}`;
        if (time === 0) {
            clearInterval(timerId);
            timerEl.innerText = 'Time up!';
        }
    }, 1000);
    startBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerId);
    time = 1500;
    timerEl.innerText = '25:00';
    startBtn.disabled = false;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);