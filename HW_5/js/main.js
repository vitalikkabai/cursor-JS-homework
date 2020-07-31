// const firstForm = document.getElementById('firstForm');
// const firstResult = document.getElementById('firstResult');



const getRandomArray = (length, minValue, maxValue) => {
  const randomMass = [];
  randomMass.length = length;
  randomMass.map((item, index, randomMass) => {
    console.log("Hi!");
  })
  console.log(randomMass);
  return randomMass;
}



firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const length = event.target[0].value;
    const minValue = event.target[1].value;
    const maxValue = event.target[2].value;
    firstResult.innerText = `Функція №1: ${getRandomArray (length, minValue, maxValue)}`;

});


