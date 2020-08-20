function getMyTaxes(salary) {
    return salary * this.tax;
}

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}


function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

function getMySalary(country) {
        setInterval(function() { 
        const salary = Math.floor(Math.random() * 501 + 1500);
        const taxes = Math.round((salary * country.tax) * 100) / 100;
        const profit = Math.round((salary - taxes) * 100) / 100;
        console.log(JSON.stringify({ salary, taxes, profit }));
    }, 10000, country);
}