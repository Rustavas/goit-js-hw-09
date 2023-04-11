import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs ={
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button'),
}
const position = 1;

refs.submitBtn.addEventListener('submit', createPromise)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
};
   


createPromise(position, refs.firstDelay)
  .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success('✅ Fulfilled promise ${position} in ${delay}ms')
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure('❌ Rejected promise ${position} in ${delay}ms');
  });