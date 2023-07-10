const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");

let timerTimeOut;

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);

const storeAudio = new Audio("./assets/Cafeteria.wav");
const storeBtn = document.querySelector(".storeBtn");

const forestAudio = new Audio("./assets/Floresta.wav");
const forestBtn = document.querySelector(".forestBtn");

const rainAudio = new Audio("./assets/Chuva.wav");
const cloudBtn = document.querySelector(".cloudBtn");

const fireAudio = new Audio("./assets/Lareira.wav");
const fireBtn = document.querySelector(".fireBtn");

let isPlaying = false;

storeAudio.loop = true;
forestAudio.loop = true;
rainAudio.loop = true;
fireAudio.loop = true;

function activateBtn(className, audioFile) {
  className.classList.toggle("turnedOn");
  if (isPlaying) {
    audioFile.pause();
    isPlaying = false;
  } else {
    audioFile.play();
    isPlaying = true;
  }
}

storeBtn.addEventListener("click", () => {
  activateBtn(storeBtn, storeAudio);
});

forestBtn.addEventListener("click", () => {
  activateBtn(forestBtn, forestAudio);
});

fireBtn.addEventListener("click", () => {
  activateBtn(fireBtn, fireAudio);
});

cloudBtn.addEventListener("click", () => {
  activateBtn(cloudBtn, rainAudio);
});

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

playBtn.addEventListener("click", () => {
  if (timerTimeOut != undefined) {
    return;
  }
  countdown();
});

pauseBtn.addEventListener("click", () => {
  clearTimeout(timerTimeOut);
  timerTimeOut = undefined;
});

plusBtn.addEventListener("click", () => {
  if (minutes >= 60) {
    return;
  }
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0");
  minutes = Number(minutesDisplay.textContent);
});

minusBtn.addEventListener("click", () => {
  if (minutes <= 0) {
    return;
  }
  minutesDisplay.textContent = String(minutes - 5).padStart(2, "0");
  minutes = Number(minutesDisplay.textContent);
});
