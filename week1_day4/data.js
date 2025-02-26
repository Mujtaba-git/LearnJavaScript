const username = "testUser"; // String
let passwordLength = 8; // Number
const isAdmin = false; // Boolean
let lastLogin = null; // Null (User has never logged in)
let promoDiscount; // Undefined (No discount assigned)

// Checking if password length is valid
if (passwordLength >= 8) {
    console.log(" Password is secure.");// output
} else {
    console.log(" Password is too short.");
}

// Checking admin privileges
if (isAdmin) {
    console.log(" Welcome Admin!");
} else {
    console.log(" Access Denied. Admin Only.");//output
}

// Checking if user has logged in before
if (lastLogin === null) {
    console.log(" First-time login detected.");// out put
}

// Checking if a discount is available
if (promoDiscount === undefined) {
    console.log(" No promotional discount available.");
}
const user = {
    name: "Alice",
    age: 25,
    isMember: true
};
console.log(user.name, user.age, user.isMember); // Output: Alice
