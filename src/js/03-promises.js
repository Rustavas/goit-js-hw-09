
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs ={
  form: document.querySelector('.form'), 
}

refs.form.addEventListener('submit', startGeneration);
  
function startGeneration (event){
  event.preventDefault();
    let firstDelay = Number(event.currentTarget.elements.delay.value);
    let stepDelay = Number(event.currentTarget.elements.step.value);
    let amountEl = Number(event.currentTarget.elements.amount.value);

  for(let i = 1; i <= amountEl; i += 1 ){
    createPromise(i, firstDelay)
    .then(({ position, firstDelay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${firstDelay}ms`)
    })
    .catch(({ position, firstDelay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${firstDelay}ms`);
    });
    firstDelay += stepDelay;
  };
};


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



