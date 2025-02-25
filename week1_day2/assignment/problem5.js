/* Problem 5: Block Scope with let
Declare a variable color with let and assign any string. Then create a new block (using curly braces { }) inside your code and declare another color variable with a different string inside that block. Print color inside the block and outside the block. Notice how the values differ because of block scoping.
Explanation: Variables declared with let have block scope, which means each pair of curly braces can hold a separate variable with the same name, without affecting the outer variable.
Hint:
let color = "Red";
{
  let color = "Green";
  console.log(color); // prints "Green"
}
console.log(color); // prints "Red"

Expected Output: Inside the block you should see one color, and outside the block you should see another, reflecting the idea of block scoping.
 */

let color = "Red";
{
  let color = "Green";
  console.log(color); // prints "Green"
}
console.log(color); // prints "Red"
