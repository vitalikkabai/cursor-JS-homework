const firstForm = document.getElementById('firstForm');
const firstResult = document.getElementById('firstResult');
const secondResult = document.getElementById('secondResult');
const firstError = document.getElementById('firstError');
const thirdResult = document.getElementById('thirdResult');
const fourthResult = document.getElementById('fourthResult');


const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return salary * this.tax;
}

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}


function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}


function getMySalary() {
    const salary = Math.floor(Math.random() * 501 + 1500);
    const taxes = Math.round((salary * this.tax) * 100) / 100;
    const profit = salary - taxes;
    return JSON.stringify({ salary, taxes, profit });
}




firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const country = event.target[0].value;
    const salary = event.target[1].value;

    if (salary > 0) {
        firstResult.innerText = `Функція №1: ${getMyTaxes.call(eval(country), salary)}`;
    } else {
        firstError.innerText = "Зарплата введена від'ємною, спробуйте ще раз";
    }
    secondResult.innerText = `Функція №2: ${getMiddleTaxes.call(eval(country))}`;
    thirdResult.innerText = `Функція №3: ${getTotalTaxes.call(eval(country))}`;
    fourthResult.innerText = `Функція №4: ${getMySalary.call(eval(country))}`;
});