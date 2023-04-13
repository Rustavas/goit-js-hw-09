
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs ={
  form: document.querySelector('.form'), 
}

refs.form.addEventListener('submit', startGeneration);

function startGeneration (event){
  event.preventDefault();

    let firstDelay = event.currentTarget.elements.delay.value;
    let stepDelay = event.currentTarget.elements.step.value;
    let amountEl = event.currentTarget.elements.amount.value;
  for(let i=1; i <= amountEl; i += 1 ){
    createPromise(i, firstDelay)
  .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success('✅ Fulfilled promise ${position} in ${delay}ms')
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure('❌ Rejected promise ${position} in ${delay}ms');
  });
    firstDelay += stepDelay;
  }
}
function createPromise(position, delay) { 
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, delay);
      }   else {
        reject(position, delay);
      }; 
    },delay);
  });
};
