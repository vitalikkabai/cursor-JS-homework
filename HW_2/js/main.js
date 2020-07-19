function summationNumbers() {
    let numberN = parseFloat(prompt(`Введи будь яке ціле число N:`));
    let numberM = parseFloat(prompt(`Введи будь яке ціле число M:`));
    if (isNaN(numberN) || isNaN(numberM)) {
        alert("Уупс ти ввів не те що я просив, давай ще раз");
        summationNumbers();
    }
    while (numberN >= numberM) {
        alert(`Уупс число M менше бо рівне за N, твоє число N=${numberN}.`);
        summationNumbers();
    }
    if (!Number.isInteger(numberN) || !Number.isInteger(numberM)) {
        alert("Уупс ти ввів дробове число, давай ще раз");
        summationNumbers();
    }
    console.log(numberN);
    console.log(numberM);
    const evenNumber = confirm('Враховувати парні числа? Якщо так натисність "OK",якщо ні "Скасувати"');
    console.log(evenNumber);
    let sumNumbers = 0;
    for (var i = numberN; i <= numberM; i++) {
        if (i % 2 === 0 && evenNumber === false) {
            continue;
        } else {
            sumNumbers += i;
        }
    }
    console.log(sumNumbers);
}
summationNumbers();