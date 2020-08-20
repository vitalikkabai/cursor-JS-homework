const firstForm = document.getElementById('firstForm');
const firstResult = document.getElementById('firstResult');
const secondResult = document.getElementById('secondResult');
const firstError = document.getElementById('firstError');
const thirdResult = document.getElementById('thirdResult');
const fourthResult = document.getElementById('fourthResult');


const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const countrySring = event.target[0].value;
    const salary = event.target[1].value;
    const country = eval(countrySring);
    if (salary > 0) {
        firstResult.innerText = `Функція №1: ${getMyTaxes.call(country, salary)}`;
    } else {
        firstError.innerText = "Зарплата введена від'ємною, спробуйте ще раз";
    }
    secondResult.innerText = `Функція №2: ${getMiddleTaxes.call(country)}`;
    thirdResult.innerText = `Функція №3: ${getTotalTaxes.call(country)}`;
    fourthResult.innerText = `Функція №4: Знаходиться в консолі `;
    getMySalary(country);
});

