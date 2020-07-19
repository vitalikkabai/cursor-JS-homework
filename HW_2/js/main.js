let numberN = parseFloat(prompt(`Введи будь яке ціле число N:`));
let numberM = parseFloat(prompt(`Введи будь яке ціле число M:`));

if (isNaN(numberN) === true || isNaN(numberM) === true){
	alert("Уупс ти ввів не те що я просив, давай ще раз");
	numberN = parseFloat(prompt(`Введи будь якесь ціле число N:`));
	numberM = parseFloat(prompt(`Введи будь якесь ціле число M:`));
}

while (numberN >= numberM) {
	numberM = parseInt(prompt(`Уупс число M менше бо рівне за N, твоє число N=${numberN}. Введи число M:`));
}

if (Number.isInteger(numberN) === false || Number.isInteger(numberM) === false) {
	alert("Уупс ти ввів дробове число, давай ще раз");
	numberN = parseFloat(prompt(`Введи будь якесь ціле число N:`));
	numberM = parseFloat(prompt(`Введи будь якесь ціле число M:`));
}
console.log(numberN);
console.log(numberM);


const evenNumber = confirm('Враховувати парні числа? Якщо так натисність "OK",якщо ні "Скасувати"');
console.log(evenNumber);



let sumNumbers = 0;
for (var i = numberN; i <= numberM; i++) {
	if (i % 2 == 0 && evenNumber === false) {	
		continue;
	} 
	else {
		sumNumbers += i;
	}
}
console.log(sumNumbers);