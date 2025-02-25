/*Assignment 1: 
Title: Calculate Test Case Statistics

Description:
In test automation, you need to track the number of passed, failed, and skipped test cases. Create a script to calculate the total test cases and log the results.

Tasks:
Declare passed, failed, and skipped test counts using let.
Use arithmetic operators to calculate the totalTests.
Log the results using console.log in the format:
Total: X, Passed: Y, Failed: Z, Skipped: A.

Hint:
console.log(`Total: ${totalTests}, Passed: ${passed}, ...`); */

const { timeStamp } = require("console");

let totalTests = 200;
let passTests = 170;
let failTests = 25;
let skipTests = 5;

console.log(`Total: ${totalTests}, Passed: ${passTests}, Failed: ${failTests}, Skipped: ${skipTests}`);
console.log("Testtoal" + totalTests);

