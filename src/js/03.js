import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs ={
  form: document.querySelector('.form'), // в задании написано сабмит по форме
  submitBtn: document.querySelector('button'),
}

refs.submitBtn.addEventListener('submit', startGeneration)

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
   


createPromise(position, delay)// ошибка в консоли
  .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success('✅ Fulfilled promise ${position} in ${delay}ms')
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure('❌ Rejected promise ${position} in ${delay}ms');
  });

  function startGeneration (event){
    event.preventDefault();
    const {elements: {delay, step,amount}} = event.currentTarget;// не понятная запись
    let firstDelay = Number(event.currentTarget.delay.value);
    let stepDelay = Number(event.currentTarget.step.value);
    let amountEl = Number(event.currentTarget.amount.value);
    for(let i = 0; i < amountEl; i += 1){
      createPromise(i, firstDelay);
      firstDelay += stepDelay;
    };
  };
 