const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const resume = document.querySelector('.resume');
const select = document.querySelector("#timer");

startFlag = true;
pauseFlag = false;
let min,time;

const startTime = () => {
  if (!pauseFlag && time >= 0) {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    if (mins < 10) {
      mins = '0' + mins;
    } 
    if (secs < 10) {
      secs = '0' + secs;
    }
    time--;
    minEl.textContent = mins;
    secEl.textContent = secs;
  }
};

let restartTimer = setInterval(startTime,1000);

const restart = () => {
  clearInterval(restartTimer);
  restartTimer = setInterval(startTime, 1000);
}

start.addEventListener('click', (e) => {
  e.preventDefault();
  if (startFlag) {
    min = parseInt(select.value);
    time =  min * 60;
  }
  restart();
});

pause.addEventListener('click', (e) => {
  e.preventDefault();
  pauseFlag = true;
});

reset.addEventListener('click', (e) => {
  e.preventDefault();
  time = min * 60;
  pauseFlag = false;
});

resume.addEventListener('click', (e) => {
  e.preventDefault();
  pauseFlag = false;
});
