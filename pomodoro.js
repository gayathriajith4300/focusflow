let timeLeft = 25 * 60;
let timer = null;
let currentMode = "pomodoro";

const pomodoroBtn = document.getElementById("pomodoro");
const shortBreakBtn = document.getElementById("shortbreak");
const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

pomodoroBtn.addEventListener("click", function () {

    currentMode = "pomodoro";

    timeLeft = 25 * 60;

    timerDisplay.textContent = "25:00";

    clearInterval(timer);

    timer = null;

    startBtn.textContent = "Start";
});

shortBreakBtn.addEventListener("click", function () {

    currentMode = "shortbreak";

    timeLeft = 5 * 60;

    timerDisplay.textContent = "05:00";

    clearInterval(timer);

    timer = null;

    startBtn.textContent = "Start";
});

startBtn.addEventListener("click", function () {

    if (timer === null) {

        startBtn.textContent = "Pause";

        timer = setInterval(function () {

            timeLeft--;

            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;

            timerDisplay.textContent =
                String(minutes).padStart(2, "0") + ":" +
                String(seconds).padStart(2, "0");
            if (timeLeft === 0) {

                clearInterval(timer);

                timer = null;

                alert("Time's up!");

                startBtn.textContent = "Start";
            }

        }, 1000);

    } else {

        clearInterval(timer);

        timer = null;

        startBtn.textContent = "Start";
    }
});

resetBtn.addEventListener("click", function () {

    clearInterval(timer);

    timer = null;

    if (currentMode === "pomodoro") {

        timeLeft = 25 * 60;

        timerDisplay.textContent = "25:00";

    } else {

        timeLeft = 5 * 60;

        timerDisplay.textContent = "05:00";
    }

    startBtn.textContent = "Start";
});