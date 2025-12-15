let a = 10;
let b = 20;
// console.log`(sum of 10 and 20: + ${a + b})`; // 30

// Type Coercion

let c = "9";
let d = 4;
// console.log`(sum of "9" and 4: + ${c + d})`; // 94
// console.log`(sum of "9" and 4: + ${c - d})`; // 5
// console.log`(sum of "9" and 4: + ${c * d})`; // 36
// console.log`(sum of "9" and 4: + ${c / d})`; // 2.25

// Accest and print

// let age = +prompt("Enter your age: "); // type casting string to number
// console.log(age)

// swaping with five things

let x = 5;
let y = 10;
let z = x;
x = y;
y = z;
console.log(x, y);
[x, y] = [y, x]; // destructuring assignment
console.log(x, y);
// swaping without third variable
x = x + y;  // x now becomes 15
y = x - y;  // y becomes 5
x = x - y;  // x becomes 10
console.log(x, y);
// swaping with xor operator
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(x, y);
// swaping with multiplication and division
x = x * y;  
y = x / y;  
x = x / y;  
console.log(x, y);
