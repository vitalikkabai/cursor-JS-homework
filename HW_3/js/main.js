const form = document.getElementById('form');
const resultTag = document.getElementById('result');


const getMaxDigit = (inputNumber) => {
    const maxNumber = Math.max(...(inputNumber.split('')));
    return maxNumber;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputNumber = event.target[0].value;
    resultTag.innerText = `Функція №1: ${getMaxDigit(inputNumber)}`;

});
// Функція 1


const secondForm = document.getElementById('secondForm');
const secondResult = document.getElementById('secondResult');


const raisingNumDegree = (initialNumber, degreeNumber) => {
    let numberInDegree = initialNumber;
    if (degreeNumber > 0) {
        for (var i = 0; i < degreeNumber; i++) {
            numberInDegree *= initialNumber;
        }
        return numberInDegree;
    } else if (degreeNumber < 0) {
        for (var i = 0; i < degreeNumber; i++) {
            numberInDegree *= initialNumber;
        }
        numberInDegree = (1 / numberInDegree);
        return numberInDegree;
    } else {
        numberInDegree = 0;
        return numberInDegree;
    }

}

secondForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const initialNumber = event.target[0].value;
    const degreeNumber = event.target[1].value;
    secondResult.innerText = `Функція №2: ${raisingNumDegree (initialNumber, degreeNumber)}`;
});

// Функція 2

const thirdForm = document.getElementById('thirdForm');
const thirdResult = document.getElementById('thirdResult');


const firstLetterUpperCase = (inputText) => {
    const wordToArray = inputText.split('');
    for (var i = 0; i < wordToArray.length; i++) {
        wordToArray[i] = wordToArray[i].toLowerCase()
    }

    wordToArray[0] = wordToArray[0].toUpperCase();
    return wordToArray.join('');
    console.log(wordToArray);
}

thirdForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputText = event.target[0].value;
    thirdResult.innerText = `Функція №3: ${firstLetterUpperCase(inputText)}`;

});


// Функція 3


const fourthForm = document.getElementById('fourthForm');
const fourthResult = document.getElementById('fourthResult');


const salaryNet = (salary) => {
    let finalSalary = salary;
    finalSalary -= (finalSalary * 0.195);
    return finalSalary;
}

fourthForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const salary = event.target[0].value;
    fourthResult.innerText = `Функція №4: ${salaryNet (salary)}`;
});


// Функція 4


const fifthForm = document.getElementById('fifthForm');
const fifthResult = document.getElementById('fifthResult');
const error = document.getElementById('error');

const getRandomInt = (fromFirstNumber, toSecondNumber) => {
    return Math.floor(Math.random() * (toSecondNumber - fromFirstNumber)) + fromFirstNumber;
}

fifthForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fromFirstNumber = +event.target[0].value;
    const toSecondNumber = +event.target[1].value;
    console.log(fromFirstNumber);

    if (fromFirstNumber >= toSecondNumber) {
        error.innerText = 'Число M має бути більше за число N';
    } else {
        fifthResult.innerText = `Функція №5: ${getRandomInt (fromFirstNumber, toSecondNumber)}`;
    }


});


// Функція 5



const sixthForm = document.getElementById('sixthForm');
const sixthResult = document.getElementById('sixthResult');


const howManyLettersinWord = (inputSring, removeLetter) => {
    const inputSringArr = inputSring.toLowerCase().split('');
    const tmpremoveLetter = removeLetter.toLowerCase();
    let tmpCounterLetter = 0;
    for (var i = 0; i < inputSringArr.length; i++) {
        if (inputSringArr[i] === tmpremoveLetter) {
            tmpCounterLetter++;
        }
    }
    return tmpCounterLetter;
}


sixthForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputSring = event.target[0].value;
    const removeLetter = event.target[1].value;
    sixthResult.innerText = `Функція №6: ${howManyLettersinWord (inputSring, removeLetter)}`;
});


// 6 функція



const seventhForm = document.getElementById('seventhForm');
const seventhResult = document.getElementById('seventhResult');


const calcExchangeRates = (exchange) => {
	
}

seventhForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const exchange = event.target[0].value;
    seventhResult.innerText = `Функція №7: ${calcExchangeRates (exchange)}`;
});



// Заюзай завтра toLoverCase до обох інпутів. А краще перепиши це для функції 9


// const sixthForm = document.getElementById('sixthForm');
// const sixthResult = document.getElementById('sixthResult');


// const howManyLettersinWord = (inputSring, removeLetter) => {
//     const inputSringArr = inputSring.split('');
//     let tmpInputSringArr = inputSring.toLowerCase().split('');

//     for (var i = 0; i < inputSringArr.length; i++) {
//         if (tmpInputSringArr[i] === removeLetter) {
//             inputSringArr.splice(i, 1);
//         }
//         console.log(inputSringArr[i]);
//     }
//     console.log(inputSringArr);
//     return inputSringArr;
// }


// sixthForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const inputSring = event.target[0].value;
//     const removeLetter = event.target[1].value;
//     sixthResult.innerText = `Функція №2: ${howManyLettersinWord (inputSring, removeLetter)}`;
// });