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
        for (var i = 0; i < degreeNumber - 1; i++) {
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
        numberInDegree = 1;
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
    return Math.floor(Math.random() * (toSecondNumber - fromFirstNumber+1)) + fromFirstNumber;
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

const howManyLettersinWord = (inputSring, countsLetter) => {
    const inputSringArr = inputSring.toLowerCase().split('');
    const tmpremoveLetter = countsLetter.toLowerCase();
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
    const countsLetter = event.target[1].value;
    sixthResult.innerText = `Функція №6: ${howManyLettersinWord (inputSring, countsLetter)}`;
});

// 6 функція

const seventhForm = document.getElementById('seventhForm');
const seventhResult = document.getElementById('seventhResult');
const errorExchange = document.getElementById('errorExchange');

const calcExchangeRates = (amount) => {
    const moneyValue = parseFloat(amount);
    const isUAH = amount.toLowerCase().includes('uah');
    const isDollar = amount.includes('$');
    let exchange = 0;
    if (isDollar) {
        exchange = moneyValue * 27.514;
        return (Math.floor(exchange * 100) / 100);
    } else if (isUAH) {
        exchange = moneyValue / 27.685;
        return (Math.floor(exchange * 100) / 100);
     } //else {
    //     errorExchange.innerText = 'Ви ввели не правильне значення, спробуйте ще раз';
    // }

}

seventhForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = event.target[0].value;
    if(parseFloat(amount)<0){
        errorExchange.innerText = 'Ви ввели не правильне значення, спробуйте ще раз';
    } else{
        seventhResult.innerText = `Функція №7: ${calcExchangeRates (amount)}`;
    }


    
});

// Функція 7

const inputError = document.getElementsByTagName('inputError');
const eightForm = document.getElementById('eightForm');
const eightResult = document.getElementById('eightResult');

const getRandomPassword = (passwordLength) => {
    let passwordArr = [];
    for (var i = 0; i < passwordLength; i++) {
        passwordArr[i] = Math.floor(Math.random() * 10);
    }

    return passwordArr.join('');
}

eightForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let passwordLength = event.target[0].value;
    if (passwordLength === "") {
        passwordLength = 8;
        eightResult.innerText = `Функція №8: ${getRandomPassword(passwordLength)}`;
    } else if (passwordLength < 0) {
        inputError.innerText = 'Число має бути додатнє';
    } else {
        eightResult.innerText = `Функція №8: ${getRandomPassword(passwordLength)}`;
    }


});

// Функція 8

const ninthForm = document.getElementById('ninthForm');
const ninthResult = document.getElementById('ninthResult');

const deleteLetters = (initialString, removeLetter) => {
    const initialStringArr = initialString.split('');
    let tmpInitialStringArr = initialString.toLowerCase().split('');

    for (var i = 0; i < initialStringArr.length; i++) {
        if (tmpInitialStringArr[i] === removeLetter) {
            initialStringArr.splice(i, 1);
            tmpInitialStringArr.splice(i, 1);
            i--;
        }
        console.log(initialStringArr[i]);
    }
    console.log(initialStringArr);
    return initialStringArr.join('');
}


ninthForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const initialString = event.target[0].value;
    const removeLetter = event.target[1].value;
    ninthResult.innerText = `Функція №9: ${deleteLetters (initialString, removeLetter)}`;
});

// Функція 9

const tenthForm = document.getElementById('tenthForm');
const tenthResult = document.getElementById('tenthResult')

const isPalyndrom = (inputText) => {
    let inputTextArr = inputText.toLowerCase().split('');
    for (let i = 0; i < inputTextArr.length; i++) {
        if (inputTextArr[i] === " ") {
            inputTextArr.splice(i, 1);
            i--;
        }
    }

    let tmpinputTextArr = inputTextArr.slice().reverse();

    for (let i = 0; i < inputTextArr.length; i++) {
        if (inputTextArr[i] !== tmpinputTextArr[i]) {
            return false;
        }
    }

    return true;

    console.log(inputTextArr);
    console.log(tmpinputTextArr);
}

tenthForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputText = event.target[0].value;
    tenthResult.innerText = `Функція №10: ${isPalyndrom(inputText)}`;

});

// Функція 10

const eleventhForm = document.getElementById('eleventhForm');
const eleventhResult = document.getElementById('eleventhResult')

const deleteDuplicateLetter = (inputText) => {
    let inputTextArr = inputText.toLowerCase().split('');
    let result = {};
    const newTextArr = [];

    for (var i = 0; i < inputTextArr.length; i++) {
        if (inputTextArr[i] === " ") {
            inputTextArr.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < inputTextArr.length; ++i) {
        let a = inputTextArr[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }


    for (let i in result) {
        if (result[i] < 2) {
            newTextArr.push(i);
        }
    }
    console.log(newTextArr);
    return newTextArr.join('');
}

eleventhForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputText = event.target[0].value;
    eleventhResult.innerText = `Функція №11: ${deleteDuplicateLetter(inputText)}`;

});

// Функція 11