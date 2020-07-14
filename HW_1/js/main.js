let lemon = 15.678;
let apple = 123.965;
let grape = 90.2345;
console.log( "Ціна на лимони =", lemon);
console.log( "Ціна на яблука =", apple);
console.log( "Ціна на виноград =", grape);

let maxVal = Math.max ( lemon, apple, grape);
let minVal = Math.min ( lemon, apple, grape);
console.log ("Максимальна ціна =", maxVal);
console.log ("Мінімальна ціна =", minVal);

let sum = lemon + apple + grape;
console.log("Сума всіх товарів =", sum);

let roudingLemonPrice = Math.floor(lemon);
let roudingApplePrice = Math.floor(apple);
let roudingGrapePrice = Math.floor(grape);
console.log( "Заокруглена ціна на лимони =", roudingLemonPrice);
console.log( "Заокруглена ціна на яблука =", roudingApplePrice);
console.log( "Заокруглена ціна на виноград =", roudingGrapePrice);

let sumRounding = Math.floor(lemon)+Math.floor(apple)+Math.floor(grape);
console.log("Сума заокруглених цін на продукти =",sumRounding);

let roundingToHundreds = Math.round(sumRounding/100)*100;
console.log("Сума заокруглена до сотень =", roundingToHundreds);

let bool = (sumRounding % 2 == 0);
console.log(bool);

let money = 500;
let change = (money - sum).toFixed(2);
console.log("Решта з 500 =", change);

let averagePrice = (sum / 3).toFixed(2);
console.log("Середнє значення цін =", averagePrice);

let reduction = (Math.random()*100).toFixed(2);
console.log("Знижка =", reduction);

let bidPrice = (Math.random()*sum).toFixed(2);
console.log("Ціна покупки =", bidPrice);

let theDiscountedPrice = (bidPrice - bidPrice*reduction/100).toFixed(2);
console.log("Ціна зі знижкою =", theDiscountedPrice);

let netProfit = ((bidPrice / 2) - reduction).toFixed(2);
console.log("Чистий прибуток =", netProfit);

document.write(`<p>1.Максимальна ціна = ${maxVal}</p> 
				<p>2.Мінімальна ціна = ${minVal}</p>
				<p>3.Сума всіх товарів = ${sum}</p>
				<p>4.Сума заокруглених цін на продукти = ${sumRounding}</p>
				<p>5.Сума заокруглена до сотень = ${roundingToHundreds}</p>
				<p>6.${bool}</p>
				<p>7.Решта з 500 = ${change}</p>
				<p>8.Середнє значення цін = ${averagePrice}</p>
				<p>9.Чистий прибуток = ${netProfit}</p>`);

