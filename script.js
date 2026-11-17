const timeLabel = document.getElementById('time');
const lapBtn = document.getElementById('lapBtn');
const startBtn = document.getElementById('startBtn');
const lapList = document.getElementById('laps');

let elapsed = 0;
let startStamp = 0;
let timer = null;
let lapCount = 0;

function format(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centis = Math.floor((ms % 1000) / 10);
  return [minutes, seconds, centis].map(n => String(n).padStart(2, '0')).join(':');
}

function currentTime() {
  return timer ? elapsed + (performance.now() - startStamp) : elapsed;
}

function tick() {
  timeLabel.textContent = format(currentTime());
}

function start() {
  startStamp = performance.now();
  timer = setInterval(tick, 10);
  startBtn.textContent = 'Stop';
  startBtn.classList.add('running');
  lapBtn.textContent = 'Lap';
  lapBtn.disabled = false;
}

function stop() {
  elapsed = currentTime();
  clearInterval(timer);
  timer = null;
  tick();
  startBtn.textContent = 'Start';
  startBtn.classList.remove('running');
  lapBtn.textContent = 'Reset';
}

function reset() {
  elapsed = 0;
  lapCount = 0;
  lapList.innerHTML = '';
  timeLabel.textContent = format(0);
  lapBtn.textContent = 'Lap';
  lapBtn.disabled = true;
}

function addLap() {
  lapCount++;
  const li = document.createElement('li');
  const name = document.createElement('span');
  const value = document.createElement('span');
  name.textContent = 'Lap ' + lapCount;
  value.textContent = format(currentTime());
  li.appendChild(name);
  li.appendChild(value);
  lapList.prepend(li);
}

startBtn.addEventListener('click', () => {
  if (timer) {
    stop();
  } else {
    start();
  }
});

lapBtn.addEventListener('click', () => {
  if (timer) {
    addLap();
  } else {
    reset();
  }
});
