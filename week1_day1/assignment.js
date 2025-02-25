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

/*let totalTests = 200;
let passTests = 170;
let failTests = 25;
let skipTests = 5;

console.log(`Total: ${totalTests}, Passed: ${passTests}, Failed: ${failTests}, Skipped: ${skipTests}`);

const x =10;
console.log(x);
{const x =9;
console.log(x);} 
// black scope
{const Y =9;
    console.log(Y);} 

    console.log(Y); */
// understand block scpoe let
{let Y =9;
    console.log("this is the resultof let:",Y);} 

//    console.log("this is the resultof let outside:",Y);

let X = 10;
 console.log("this is the result of let outside:", X);
  {let X = 10;
    console.log("this is the result of let inside:", X);}


if (true) {
    let x = 10;
    console.log("inside: " + x + " value."); //concatinaiton
    }
    //console.log(x);

let a,b,c,d;
a = 1;
b = 2;
c = 3;
d = 4;

console.log(a + b + c + d + " total ");
console.log(a + b + c + d);
console.log(" total " + a + b + c + d);
console.log((a+b+c+d)*10);

const color; // Is this allowed?
color = "blue";

let colour;
colour = "red";