const lemon = 15.678;
const apple = 123.965;
const grape = 90.2345;
console.log( "Ціна на лимони =", lemon);
console.log( "Ціна на яблука =", apple);
console.log( "Ціна на виноград =", grape);

const maxVal = Math.max (lemon, apple, grape);
const minVal = Math.min (lemon, apple, grape);
console.log ("Максимальна ціна =", maxVal);
console.log ("Мінімальна ціна =", minVal);

const sum = lemon + apple + grape;
console.log("Сума всіх товарів =", sum);

const roudedPriceLemon = Math.floor(lemon);
const roudedPriceApple = Math.floor(apple);
const roudedPriceGrape = Math.floor(grape);
console.log( "Заокруглена ціна на лимони =", roudedPriceLemon);
console.log( "Заокруглена ціна на яблука =", roudedPriceApple);
console.log( "Заокруглена ціна на виноград =", roudedPriceGrape);

const sumRounding = Math.floor(lemon)+Math.floor(apple)+Math.floor(grape);
console.log("Сума заокруглених цін на продукти =",sumRounding);

const roundingToHundreds = Math.round(sumRounding/100)*100;
console.log("Сума заокруглена до сотень =", roundingToHundreds);

const bool = (sumRounding % 2 === 0);
console.log(bool);

const money = 500;
const change = (money - sum);
console.log("Решта з 500 =", change);

const averagePrice = (sum / 3).toFixed(2);
console.log("Середнє значення цін =", averagePrice);

const reduction = (Math.random()*100).toFixed(2);
console.log("Знижка =", reduction);

const bidPrice = (Math.random()*sum).toFixed(2);
console.log("Ціна покупки =", bidPrice);

const theDiscountedPrice = (bidPrice - bidPrice*reduction/100).toFixed(2);
console.log("Ціна зі знижкою =", theDiscountedPrice);

const netProfit = ((bidPrice / 2) - reduction).toFixed(2);
console.log("Чистий прибуток =", netProfit);

// document.write(`<p>1.Максимальна ціна = ${maxVal}</p> 
// 				<p>2.Мінімальна ціна = ${minVal}</p>
// 				<p>3.Сума всіх товарів = ${sum}</p>
// 				<p>4.Сума заокруглених цін на продукти = ${sumRounding}</p>
// 				<p>5.Сума заокруглена до сотень = ${roundingToHundreds}</p>
// 				<p>6.${bool}</p>
// 				<p>7.Решта з 500 = ${change}</p>
// 				<p>8.Середнє значення цін = ${averagePrice}</p>
// 				<p>9.Ціна зі знижкою = ${theDiscountedPrice}</p>
// 				<p>10.Чистий прибуток = ${netProfit}</p>`);

