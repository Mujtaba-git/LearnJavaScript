/* Problem 4: Working with a const Object
Create a const object named person with a name property. Print the entire object with console.log. Next, change the name property to a different string and log person again. Note that while you cannot reassign a const variable to a brand-new object, you can modify the properties of the existing object.
Explanation: const maintains the reference to the object, so you cannot do something like person = { ... }, but you can change properties like person.name = "AnotherName";.
Hint: 
const person = { name: "Alice" }; console.log(person); person.name = "Bob"; console.log(person);
Expected Output: The console should first display the object with the original name property ({ name: "Alice" }), and then display it again with the updated name ({ name: "Bob" }).
 */

const person = { name: "Alice" }; 
console.log(person); 
person.name = "Bob"; 
console.log(person);