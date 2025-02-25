let a = 10;
let b = 5;

//Arithmetic
console.log(a + b);  // Output: 15
console.log(a - b);  // Output: 5
console.log(a * b);  // Output: 50
console.log(a / b);  // Output: 2
console.log(a % b);  // Output: 0 (No remainder)

// AND, OR, NOT 
// AND &&, OR ||, NOT !

//FOR AND
let isSunny = true;
let isWarm = false;

let canGoOutside = isSunny && isWarm;
console.log(canGoOutside); // false because isWarm is false

isWarm = true;
canGoOutside = isSunny && isWarm;
console.log(canGoOutside); // true because both are now true


// FOR OR
let hasUmbrella = false;
let isRaining = true;

let shouldTakeUmbrella = hasUmbrella || isRaining;
console.log(shouldTakeUmbrella); // true because isRaining is true

hasUmbrella = false;
isRaining = false;
shouldTakeUmbrella = hasUmbrella || isRaining;
console.log(shouldTakeUmbrella); // true because hasUmbrella is true

// NOT operator
let isTired = true;
console.log(isTired);  // true

let isNotTired = !isTired;
console.log(isNotTired); // false because it negates true
