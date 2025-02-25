/* Problem 3: Declaring Multiple Variables with let
Declare two variables, firstName and lastName, using let. Assign them any values you like. Then print both on the same line using console.log. You can do this by concatenating strings or passing both variables to console.log.
Explanation: You can declare multiple variables with let in one line or separate lines. console.log allows printing multiple items in a single statement by comma-separating them.
Hint: You can write let firstName = "John", lastName = "Doe"; console.log(firstName, lastName);
Expected Output: You should see the two variable values printed in the console, for example: John Doe or John Doe depending on how you concatenate or separate them.
 */

let firstName = "Hao";
let lastName = "Cui";
console.log(firstName, lastName);
console.log("Full Name:" + firstName + " " + lastName);
console.log("My full name is ", firstName, lastName);
console.log(`My Name is ${firstName} ${lastName}`);