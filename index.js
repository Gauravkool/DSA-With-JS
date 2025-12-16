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


// operator

let p = 7;
let q = 8;
console.log(p != q);

let num1 = 11;
let num2 = 22;
let num3 = num1 + num2 + num1++ + num2++ + ++num1 + ++num2; 
// num3 = 11 + 22 + 11 + 22 + 13 + 24 = 103
console.log(num3);
console.log(num1, num2);

// 
let number = true;
// number++;
++number
console.log(number);

// Math object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.cbrt(27));
console.log(Math.abs(27)); // nagetive to positive
console.log(Math.max(27,56));
console.log(Math.min(27, 66, 2, 34, -5, -67));
console.log((Math.floor(Math.random() * 10000) + 3));
let toFixed = 689.89788786;
console.log(+toFixed.toFixed(2));

