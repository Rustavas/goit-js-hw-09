const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let timerId = null;

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

function onStart(evt){
  timerId = setInterval( changeColor, 1000);
  startButton.removeEventListener('click', onStart)
}

function onStop(evt){
clearInterval(timerId);
startButton.addEventListener('click', onStart);
}

function changeColor () {
  document.body.style.backgroundColor = getRandomHexColor(); 
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};