import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
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

refs.startBtn.addEventListener('click', countTimer );
refs.timer.style.display = 'flex'; 
refs.value.style. 

function addLeadingZero(value){
  return String(value).padStart(2, '0');
};

// const plannedDate = fp.selectedDates[0];
// console.log(plannedDate);
const plannedDate = new Date('Fri Apr 25 2023 19:57:49 GMT+0300 (Восточная Европа, летнее время)');
 
countTime ();
function countTimer () {
  setInterval(countTime, 1000)};
function countTime () {
  const now = new Date();
  const diff = plannedDate - now;
// console.log(diff);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  // const days = addLeadingZero(Math.floor(diff / day));
  refs.days.textContent = addLeadingZero(Math.floor(diff / day));
  // Remaining hours
  // const hours = addLeadingZero(Math.floor((diff % day) / hour));
  refs.hours.textContent = addLeadingZero(Math.floor((diff % day) / hour));
  // // Remaining minutes
  // const minutes = addLeadingZero(Math.floor(((diff % day) % hour) / minute));
  refs.minutes.textContent = addLeadingZero(Math.floor(((diff % day) % hour) / minute));
  // Remaining seconds
  // const seconds = addLeadingZero(Math.floor((((diff % day) % hour) % minute) / second));
  refs.seconds.textContent = addLeadingZero(Math.floor((((diff % day) % hour) % minute) / second));
  // console.log(days);
// const dayTime = days;
// const hoursTime = '${hours}';
// const minutesTime = '${minutes}';
// const secondsTime = '${seconds}';

}
 
      // refs.days.textContent = dayTime;
      // refs.hours.textContent = 10;
      // refs.minutes.textContent = 15;
      // refs.seconds.textContent = 20;
    