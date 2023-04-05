const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
}

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let timerId = null;

refs.startBtn.addEventListener('click', startChangeColor); 
refs.stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor () {
  timerId = setInterval(changeColor, 1000);
  document.body.style.backgroundColor = getRandomHexColor();
}
function changeColor () {
  document.body.style.backgroundColor = getRandomHexColor();
  
};

function stopChangeColor () {
  clearInterval(timerId);
}