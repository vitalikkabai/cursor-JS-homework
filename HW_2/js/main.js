const form = document.getElementById('form');
const error = document.getElementById('error');
const resultTag = document.getElementById('result');

const calculate = (fromFirstNumber, toSecondNumber, isEvenNumber) => {
    let result = 0;
    for (let i = fromFirstNumber; i <= toSecondNumber; i++) {
        if (!isEvenNumber && !(i % 2)) {
            continue;
        }
        result += i;
    }
    return result;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fromFirstNumber = +event.target[0].value;
    const toSecondNumber = +event.target[1].value;
    const isEvenNumber = event.target[2].checked;

    if (fromFirstNumber>= toSecondNumber) {
        error.innerText = 'Число M має бути більше за число N';
    } else {
        resultTag.innerText = `Результат: ${calculate(fromFirstNumber, toSecondNumber, isEvenNumber)}`;
    }
});