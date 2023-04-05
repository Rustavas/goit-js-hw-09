const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
}

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
let timerId = setInterval(randomColor(), 1000);
console.log(timerId);

// refs.startBtn.addEventListener('click', changeColor)
refs.stopBtn.addEventListener('click', clearInterval(timerId))


function changeColor() {
  document.body.style.backgroundColor = setInterval(randomColor(), 1000);
}
// function stopChangeColor () {
//   clearInterval(timerId);
// }