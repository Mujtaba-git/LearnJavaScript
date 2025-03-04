// Function (not inside an object)
/* function greet() {
    console.log("Hello!");
} */

// Method (inside an object)
const person = {
    name: "John",
    greet() {
        console.log("Hello, " + this.name);
    },
    hello(){
        console.log("I am print Hello by method");
    }
    
};

// Calling function
greet(); // "Hello!"

// Calling method
person.greet(); // "Hello, John"
person.hello();
