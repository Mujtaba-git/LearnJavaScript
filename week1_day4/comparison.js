/* 1. Equal To (==)
Checks if two values are the same but does not compare data types. */
let x = 10;
console.log(" 10 is a number ",x == 10); // true (value is the same but type is different)
console.log(" Ten is a string",x == "10");
console.log(" 10 is a number ",x === 10); 
console.log(" Ten is a string",x === "10");

let y = "15";
console.log("15 is a number",y != 15); // output: 15 is a number, true
console.log("fifteen is string",y != "15"); //true
console.log("15 is a number",y !== 15); // true
console.log("fifteen is string",y !== "15"); //true

const discountThreshold = 100;
let totalPrice = 90; 
let isVIP = false;

if (totalPrice >= discountThreshold && isVIP) {
    console.log(" Discount Applied!");
} else {
    console.log(" No Discount.");
}
// output should : Discount Applied!