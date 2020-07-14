let lemon = 15.678;
let apple = 123.965;
let grape = 90.2345;
console.log( "Lemon price =", lemon);
console.log( "Apple price =", apple);
console.log( "Grape price =", grape); 


console.log ("Max val =", Math.max ( lemon, apple, grape));
console.log ("Min val =", Math.min ( lemon, apple, grape));

let sum = lemon + apple + grape;

console.log("Sum =", sum);

console.log( "Rouding lemon price =", Math.floor(lemon));
console.log( "Rouding apple price =", Math.floor(apple));
console.log( "Rouding grape price =", Math.floor(grape));

let sumRounding = Math.floor(lemon)+Math.floor(apple)+Math.floor(grape);
console.log("Amount =",sumRounding);
console.log("Amount rouding =", Math.round(sumRounding/100)*100);

console.log("Change 500$ =", 500 - sum);

