// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// A variable is like a container that stores a value. It can store numbers, text, or boolean values (true/false).

let username = "Hao";  // Stores a name (text)
let age = 25;            // Stores a number
let isTester = true;     // Stores a boolean (true/false)

let nameTheVariable = "Data";

console.log(username);  // Output: Ahmad
console.log(age);       // Output: 25
console.log(isTester);  // Output: true
console.log("Printing the NameTheVairble", nameTheVariable, username, age, isTester);

//we dont redeclare the variable
username = "abc";

// Test Automation Example. Why let is being used here?
// let testStatus = "Pending"; 

// console.log("Test Status: " + testStatus);  // Output: Pending

// // After running the test, status changes to Passed.
// testStatus = "Passed";  

// console.log("Test Status: " + testStatus);  // Output: Passed

// let x = 77;
// let z = ++x;
// console.log("Incrementing the responce", z);    

// //Exponentiation
// z = 5 ** 2;
// console.log("Exponentiation", z);

// In main config file
let browser = "Chrome";

// There is some particular test and we want to run it against a different
browser="Safari";