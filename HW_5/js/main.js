// const firstForm = document.getElementById('firstForm');
// const firstResult = document.getElementById('firstResult');



const getRandomArray = (length, minValue, maxValue) => {
  const randomMass = []; 
  for (var i = 0; i < length; i++) {
    randomMass.push(Math.floor(Math.random() * (maxValue - minValue)) + minValue); 
  }
  return randomMass;
}

firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const length = +event.target[0].value;
    const minValue = +event.target[1].value;
    const maxValue = +event.target[2].value;
    firstResult.innerText = `Функція №1: [${getRandomArray (length, minValue, maxValue)}]`;

});

// Функція 1

const getRandomArray = (length, minValue, maxValue) => {
  const randomMass = []; 
  for (var i = 0; i < length; i++) {
    randomMass.push(Math.floor(Math.random() * (maxValue - minValue)) + minValue); 
  }
  return randomMass;
}

firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const length = +event.target[0].value;
    firstResult.innerText = `Функція №2: [${getRandomArray (length, minValue, maxValue)}]`;

});


