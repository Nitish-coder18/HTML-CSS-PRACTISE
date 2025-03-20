/* Ternary Operator: Use the ternary operator in JavaScript to assign a value to a variable named `status`. The value should be "Adult" if the age is 18 or above, and "Minor" otherwise */

let age = prompt("Enter Your Age: ");
let status = age>=18 ? "Adult" : "Minor";
console.log(`you Are ` + status);