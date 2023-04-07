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

refs.startBtn.addEventListener('click', startTimer);
refs.timer.style.display = 'flex'; 

function addLeadingZero(value){
  return String(value).padStart(2, '0');
};

const timer = {
  start() {
    const finishDate = fp.selectedDates[0];
   
    setInterval(() => {
      const now = new Date();
      const currentTime = finishDate - now;
      const { days, hours, minutes, seconds } = convertMs(currentTime);
      const daysTime = convertMs(currentTime);
       console.log(daysTime);

      refs.days.textContent = daysTime.days;
      refs.hours.value = daysTime.hours;
      refs.minutes.value = daysTime.minutes;
      refs.seconds.value = '${seconds}';
    }, 1000);

  },
}
function startTimer (){
  timer.start();
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
 
