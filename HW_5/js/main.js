const firstForm = document.getElementById('firstForm');
const firstResult = document.getElementById('firstResult');
const firstError = document.getElementById('firstError');
const secondResult = document.getElementById('secondResult');


const getRandomArray = (length, minValue, maxValue) => {
    const randomMass = [];
    for (var i = 0; i < length; i++) {
        randomMass.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    }
    return randomMass;
}

const randomArr = getRandomArray(length, minValue, maxValue);

const getModa = (randomArr) => {
    let massObj = {};
    randomArr.forEach((curr, i, arr) => {
        let a = randomMass[i];
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




firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const length = +event.target[0].value;
    const minValue = +event.target[1].value;
    const maxValue = +event.target[2].value;
    if (length <= 0 || minValue <= 0 || maxValue <= 0) {
        firstError.innerText = "Веддіть будь ласка коректне додатнє ціле значення";
    } else {
        if (minValue >= maxValue) {
            firstError.innerText = "Введіть max більшим ніж min";
        } else {
            firstResult.innerText = `Функція №1: [${getRandomArray (length, minValue, maxValue)}]`;
        }
    }
    secondResult.innerText = `Функція №2: Мода:${getModa (randomArr)}`;

});


// Функція 1


// const secondForm = document.getElementById('secondForm');
// const secondResult = document.getElementById('secondResult');
// const secondError = document.getElementById('secondError');
// const secondMass = document.getElementById('secondMass');

// const getModa = (length) => {
//     const randomMass = [];
//     for (var i = 0; i < length; i++) {
//         randomMass.push(Math.ceil(Math.random() * 10));
//     }
//     secondMass.innerText = `Масив:[${randomMass}]`;

//     let massObj = {};

//     randomMass.forEach((curr, i, arr) => {
//         let a = randomMass[i];
//         if (massObj[a] != undefined) {
//             ++massObj[a];
//         } else {
//             massObj[a] = 1;
//         }
//     })


//     const maxObjValue = Math.max(...Object.values(massObj));
//     const resultMass = [];

//     for (prop in massObj) {
//         if (massObj[prop] === maxObjValue) {
//             resultMass.push(prop);
//         }
//     }
//     return resultMass.join(', ');
// }

// secondForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const length = +event.target[0].value;

//     if (length <= 0) {
//         secondError.innerText = "Веддіть будь ласка коректне додатнє ціле значення";
//     } else {
//         secondResult.innerText = `Функція №2: Мода:${getModa (length)}`;
//     }


// });