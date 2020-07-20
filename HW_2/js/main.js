function summationNumbers() {
    const fromFirstNumber = parseFloat(prompt(`Введи будь яке ціле число N:`));
    const toSecondNumber = parseFloat(prompt(`Введи будь яке ціле число M:`));
    if (isNaN(fromFirstNumber) || isNaN(toSecondNumber)) {
        alert("Уупс ти ввів не те що я просив, давай ще раз");
        summationNumbers();
    }
    if (fromFirstNumber >= toSecondNumber) {
        alert(`Уупс число M менше бо рівне за N, твоє число N=${fromFirstNumber}.`);
        summationNumbers();
    }
    if (!Number.isInteger(fromFirstNumber) || !Number.isInteger(toSecondNumber)) {
        alert("Уупс ти ввів дробове число, давай ще раз");
        summationNumbers();
    }
    console.log(fromFirstNumber, typeof(fromFirstNumber));
    console.log(toSecondNumber, typeof(toSecondNumber));
    const skipEven = confirm('Враховувати парні числа? Якщо так натисність "OK",якщо ні "Скасувати"');
    console.log(skipEven);
    let sumNumbers = 0;
    for (var i = fromFirstNumber; i <= toSecondNumber; i++) {
        if (i % 2 === 0 && skipEven === false) {
            continue;
        } else {
            sumNumbers += i;
        }
    }
    console.log(sumNumbers);
}
summationNumbers();


