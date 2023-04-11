import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if ((selectedDates[0] - new Date()) < 1000){
      window.alert("Please choose a date in the future.");
    }
  },
};
const myInput = document.getElementById('datetime-picker');
const fp = flatpickr(myInput, options); 
const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
  field: document.querySelectorAll('.field'),
  value: document.querySelectorAll('.value'),
  label: document.querySelectorAll('.label'),
};

refs.startBtn.addEventListener('click', countTime );
 
function  addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function countTime () {
  let timerId = setInterval(() => {
    const now = new Date(myInput.value);
    const diff =  now - Date.now();
  // console.log(diff);
  if(diff < 1000){
    clearInterval(timerId);
    updateTimer();
    return;
  }
  const timeDate = convertMs(diff);

  updateTimer (timeDate);}, 1000);
  
}

function updateTimer ({ days='00', hours='00', minutes='00', seconds='00' } = {}) {

      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = minutes;
      refs.seconds.textContent = seconds;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds }; 
}
refs.timer.style.display = 'flex'; 
refs.field.forEach((el) => {
  el.style.marginRight = '12px';
  el.style.verticalAlign = 'middle';
});
refs.value.forEach((el) => {
  el.style.fontFamily = 'Helvetica';
  el.style.fontSize = '25px';
  el.style.fontWeight = '500';
  el.style.display = 'block';
  el.style.textAlign = "center"; 
 
})
refs.label.forEach((el) => {
  el.style.fontFamily = 'Helvetica';
  el.style.fontSize = '10px';
  el.style.textTransform = "uppercase";
  el.style.display = "block";
  el.style.textAlign = "center"; 
})

