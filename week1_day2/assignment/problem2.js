/* Problem 2: Attempting to Reassign a const Variable
Here, declare a variable with const and assign it any text string. Then try changing the value of that same variable and log it to the console. Observe what happens when you attempt to reassign a constant.
Explanation: A variable declared with const cannot be reassigned. Doing so will produce an error rather than updating the value.
Hint: If you see an error in the console, it means const variables cannot be reassigned.
Expected Output: The initial value will be printed if you log it before trying to reassign. After attempting to reassign, the console should show an error message, and you will not see a new value printed.
 */

const number = 1;
console.log(number); // output 1
number = 2;
console.log(number); // error 