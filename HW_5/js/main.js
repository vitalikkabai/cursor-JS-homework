const firstForm = document.getElementById('firstForm');
const firstResult = document.getElementById('firstResult');
const firstError = document.getElementById('firstError');
const secondResult = document.getElementById('secondResult');
const thirdResult = document.getElementById('thirdResult');
const fourthResult = document.getElementById('fourthResult');
const fifthResult = document.getElementById('fifthResult');
const seventhResult = document.getElementById('seventhResult');

const getRandomArray = (length, minValue, maxValue) => {
    const randomMass = [];
    for (var i = 0; i < length; i++) {
        randomMass.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    }
    return randomMass;
}

//Функція 1

const getModa = (randomArr) => {
    let massObj = {};
    randomArr.forEach((curr, i, arr) => {
        let a = randomArr[i];
        if (massObj[a] != undefined) {
            ++massObj[a];
        } else {
            massObj[a] = 1;
        }
    })

    const maxObjValue = Math.max(...Object.values(massObj));
    const resultMass = [];

    for (prop in massObj) {
        if (massObj[prop] === maxObjValue) {
            resultMass.push(prop);
        }
    }
    return resultMass.join(', ');
}


// Функція 2


const getAverage = (randomArr) => {
    const totalMass = randomArr.reduce((acc, elem) => {
        console.log(acc);
        return acc += elem;
    })
    return totalMass / randomArr.length;
}


// Функція 3


const getMedian = (randomArr) => {

    const sortedArr = randomArr.slice().sort((a, b) => a - b);
    console.log(sortedArr);
    if (sortedArr.length % 2) {
        return sortedArr[Math.floor(sortedArr.length / 2)];
    } else {
        return ((sortedArr[sortedArr.length / 2] + sortedArr[(sortedArr.length / 2) - 1]) / 2);
    }
}

// Функція 4

const filterEvenNumbers = (randomArr) => {
    oddMass = [];
    randomArr.forEach((number) => {
        if (number % 2) {
            oddMass.push(number);
        }
    });
    return oddMass;
}

// Функція 5

const getDividedByFive = (randomArr) => {
  DividedByFive = [];
    randomArr.forEach((number) => {
        if (number%5 === 0) {
            DividedByFive.push(number);
        }
    });
    return DividedByFive;
}


firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const length = +event.target[0].value;
    const minValue = +event.target[1].value;
    const maxValue = +event.target[2].value;
    const randomArr = getRandomArray(length, minValue, maxValue);
    if (length <= 0 || minValue <= 0 || maxValue <= 0) {
        firstError.innerText = "Веддіть будь ласка коректне додатнє ціле значення";
    } else {
        if (minValue >= maxValue) {
            firstError.innerText = "Введіть max більшим ніж min";
        } else {
            firstResult.innerText = `Функція №1: [${randomArr}]`;
        }
    }
    secondResult.innerText = `Функція №2: Мода:${getModa(randomArr)}`;
    thirdResult.innerText = `Функція №3: Середнє арифметичне: ${getAverage(randomArr)}`;
    fourthResult.innerText = `Функція №4: Медіана: ${getMedian(randomArr)}`;
    fifthResult.innerText = `Функція №5: Непарні числа масиву: ${filterEvenNumbers(randomArr)}`;
    seventhResult.innerText = `Функція №7: Числа які націло діляться на 5: ${getDividedByFive(randomArr)}`;

});