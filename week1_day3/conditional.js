const freeShippingThreshold = 50;
let cartTotal = 49; // Change this value to test different scenarios
if (cartTotal >= freeShippingThreshold) {
    console.log(" Free shipping applied!");
} else {
    console.log(" Shipping charges will apply.");
}

// For checking multiple conditions, we use else if:
let totalCost = 50;
if (totalCost > freeShippingThreshold) {
    console.log(" Free shipping applied!"); // Runs if condition1 is true
} else if (totalCost = freeShippingThreshold) {
    console.log(" You just match limited amd applied free shipping!");// Runs if condition1 is false but condition2 is true
} else {
    console.log(" Shipping charges will apply.");// Runs if all conditions are false
}

//For example, a comparison operator checks if a customer qualifies for a discount:
/* let totalAmount = 100;
console.log(totalAmount >= 50); // Output: true */

//A logical operator allows either of two conditions to grant a discount:
/* let isVIP = true;
let totalAmount = 30;
console.log(totalAmount >= 50 || isVIP); // Output: true */

//A conditional statement actually makes a decision based on the result:
let totalAmount = 30;
let isVIP = true;

if (totalAmount >= 50 || isVIP) {
    console.log("Discount Applied!");
} else {
    console.log("No Discount.");
}


/* Case Study: Automated Login Testing for a Banking App
A banking application has the following login rules:
If both username and password are correct, the user can log in.
If either username or password is incorrect, login fails.
If the account is locked, the user cannot attempt to log in.
As a QA engineer, you write an automated test to validate these conditions: */
const correctUsername = "testUser";
const correctPassword = "securePass123";

let enteredUsername = "testUser"; // Simulating correct username
let enteredPassword = "wrongPass"; // Simulating incorrect password
let isAccountLocked = false; // Simulating an unlocked account

if (isAccountLocked) {
    console.log(" Login failed: Your account is locked.");
} else if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    console.log(" Login successful!");
} else {
    console.log(" Login failed: Incorrect username or password.");
}
