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
    console.log(JSON.stringify({ salary, taxes, profit })) ;
}
