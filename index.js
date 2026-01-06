/**************************************
 Q1. Sum of two numbers
**************************************/
function sum(a, b) {
  return a + b;
}

/**************************************
 Q2. Type Coercion examples
**************************************/
function typeCoercion(c, d) {
  return {
    addition: c + d, // string concat
    subtraction: c - d, // number
    multiplication: c * d,
    division: c / d,
  };
}

/**************************************
 Q3. Type casting (string to number)
**************************************/
function toNumber(value) {
  return +value;
}

/**************************************
 Q4. Swapping using third variable
**************************************/
function swapWithTemp(x, y) {
  let z = x;
  x = y;
  y = z;
  return [x, y];
}

/**************************************
 Q5. Swapping using destructuring
**************************************/
function swapDestructuring(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

/**************************************
 Q6. Swapping without third variable
     (Addition & Subtraction)
**************************************/
function swapAddSub(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  return [x, y];
}

/**************************************
 Q7. Swapping using XOR operator
**************************************/
function swapXor(x, y) {
  x = x ^ y;
  y = x ^ y;
  x = x ^ y;
  return [x, y];
}

/**************************************
 Q8. Swapping using multiplication
     and division
**************************************/
function swapMulDiv(x, y) {
  x = x * y;
  y = x / y;
  x = x / y;
  return [x, y];
}

/**************************************
 Q9. Not equal (!=) operator
**************************************/
function notEqual(p, q) {
  return p != q;
}

/**************************************
 Q10. Pre & post increment operation
**************************************/
function complexIncrement() {
  let num1 = 11;
  let num2 = 22;

  let result = num1 + num2 + num1++ + num2++ + ++num1 + ++num2;

  return {
    result,
    num1,
    num2,
  };
}

/**************************************
 Q11. Boolean increment
**************************************/
function booleanIncrement() {
  let number = true;
  ++number;
  return number;
}

/**************************************
 Q12. Math object operations
**************************************/
function mathOperations() {
  return {
    pi: Math.PI,
    e: Math.E,
    cubeRoot: Math.cbrt(27),
    absValue: Math.abs(-27),
    maxValue: Math.max(27, 56),
    minValue: Math.min(27, 66, 2, 34, -5, -67),
    randomNumber: Math.floor(Math.random() * 10000) + 3,
    fixedValue: +(689.89788786).toFixed(2),
  };
}

/**************************************
 Q13. Shopping bill discount calculation
**************************************/
function calculatePayableAmount(billAmount) {
  let discountPercent = 0;

  if (billAmount > 0 && billAmount <= 5000) {
    discountPercent = 0;
  } else if (billAmount <= 7000) {
    discountPercent = 10;
  } else if (billAmount <= 9000) {
    discountPercent = 15;
  } else if (billAmount > 9000) {
    discountPercent = 20;
  } else {
    return "Invalid amount";
  }

  let discount = Math.floor((billAmount * discountPercent) / 100);
  let payableAmount = billAmount - discount;

  return {
    billAmount,
    discountPercent,
    discount,
    payableAmount,
  };
}

/**************************************
 Q14. Electricity bill calculation
**************************************/
function calculateElectricityBill(units) {
  let bill = 0;

  if (units <= 0) return "Invalid units";

  if (units > 400) {
    bill += (units - 400) * 13;
    units = 400;
  }

  if (units > 200) {
    bill += (units - 200) * 8;
    units = 200;
  }

  if (units > 100) {
    bill += (units - 100) * 6;
    units = 100;
  }

  bill += units * 4;

  return bill;
}

// INR denomination
function inrDenomination(amount) {
  const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  let result = {};

  for (let note of notes) {
    if (amount >= note) {
      result[note] = Math.floor(amount / note);
      amount = amount % note;
    }
  }
  return result;
}

let num = 0.1 + 0.2; // 0.30000000000000004
let num2 = (0.1 + 0.2).toFixed(1);

switch (num2) {
  case "0.3":
    console.log("hello");
    break;

  case "0.5":
    console.log("hey");
    break;

  default:
    console.log("namaste");
}

// sum of natural number
const sumNaturalNum = (endNum) => {
  let sumNum = 0;
  for (let i = 1; i <= endNum; i++) {
    sumNum += i;
  }
  return sumNum;
};

// factorial
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// factors
const factors = (fac) => {
  let result = [];
  for (let i = 1; i <= Math.sqrt(fac); i++) {
    if (fac % i === 0) {
      result.push(i); // push small factor

      if (i !== fac / i) {
        result.push(fac / i); // push big factor
      }
    }
  }
};

// prime number
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// another function for prime number
const isPrimeAnother = (n) => {
  if (n <= 0) return false;
  if (n === 2) return true;
  if (n % 2 == 0) return false;
  for (i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
};

// sum of digits
const sumDigit = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

// reverse number
const reverseNum = (num) => {
  let result = 0;
  while (num > 0) {
    let digit = num % 10;
    result = result * 10 + digit;
    num = Math.floor(num / 10);
  }
  return result;
};

// strong number
const isStrongNum = (n) => {
  let realNum = n;
  let result = 0;
  while (n > 0) {
    let rem = n % 10;
    let fect = 1;
    for (let i = 1; i <= rem; i++) {
      fect *= i;
    }
    result += fect;
    n = Math.floor(n / 10);
  }
  return result === realNum;
};

// Guess the random number

const guessRandomNum = () => {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  let guess = -1;

  while (guess !== randomNum) {
    guess = +prompt("Guess the number (1 to 100)");

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Please try again. Number should be between 1 and 100.");
      continue;
    }

    if (guess > randomNum) {
      console.log("Too high, please try again");
    } else if (guess < randomNum) {
      console.log("Too low, please try again");
    } else {
      console.log("Congrats! The number was: " + guess);
    }
  }
};

// star pattern

function printStarPattern() {
  let prompt = require("prompt-sync")();
  let number = +prompt("Enter Your Number: ");

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      process.stdout.write("* ");
    }
    console.log(); // move to next line
  }
}

function printStarPattern1() {
  let prompt = require("prompt-sync")();
  let number = +prompt("Enter Your Number: ");

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log(); // move to next line
  }
}

function printStarPattern2() {
  let prompt = require("prompt-sync")();
  let number = +prompt("Enter Your Number: ");

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number - i + 1; j++) {
      // j=i; j<=n; j++ // j=n; j>=i; j--
      process.stdout.write("* ");
    }
    console.log(); // move to next line
  }
}

function printChaPattern() {
  let prompt = require("prompt-sync")();
  let number = +prompt("Enter Your Number: ");

  for (let i = 1; i <= number; i++) {
    let ascii = 65;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${String.fromCharCode(ascii)} `);
      ascii++;
    }
    console.log(); // move to next line
  }
}

// mirror right angle stars pattern
function printStarPattern3() {
  let prompt = require("prompt-sync")();
  let number = +prompt("Enter Your Number: ");

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number - i; j++) {
      process.stdout.write("  ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log(); // move to next line
  }
}

// X pattern
function printXStarPattern() {
  let prompt = require("prompt-sync")();
  let number = +prompt("Enter Your Number: ");

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (i == j || i + j == number + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log(); // move to next line
  }
}
// printTriangleStarPattern
function printCenteredSpacedTriangle() {
  let prompt = require("prompt-sync")();
  let number = +prompt("Enter Your Number: ");

  for (let i = 1; i <= number; i++) {
    // print spaces
    for (let j = 1; j <= number - i; j++) {
      process.stdout.write(" ");
    }
    // print stars with space
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }

    console.log();
  }
}

// V pattern
function printVStarPattern() {
  let prompt = require("prompt-sync")();
  let number = +prompt("Enter Your Number: ");

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= 2 * number - 1; j++) {
      if (i == j || i + j == 2 * number) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log(); // move to next line
  }
}

// sum of n arr elements
function sumArr() {
  let arr = [10, 30, 29, 30, 47];
  let sumOfArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArr += arr[i];
  }
  console.log(sumOfArr, "sum arrays element");
}
// find max number in array

function maxEle(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log("Max number", max);
}
// find 2nd max number in array

function findSecondMaxEle(arr) {
  let max = Math.max(arr[0], arr[1]);
  let sMax = Math.min(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      sMax = max;
      max = arr[i];
    } else if (arr[i] > sMax && max != arr[i]) {
      sMax = arr[i];
    }
  }
  console.log("Second Max", sMax);
}

// reverse array

function reverseArr(arr) {
  let reverseArrEl = [];
  let len = arr.length;
  let j = 0;
  for (let i = len - 1; i >= 0; i--) {
    reverseArrEl[j] = arr[i];
    j++;
  }
  console.log("Reverse Array", reverseArrEl);
}

// without any extra space mean

function reverseArrWithoutExtraSpace(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  console.log("reverse array", arr);
}
// move all zero left side and 1 right side

function moveZeroLeftOneRightSide(arr) {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] == 0) {
      let tem = arr[i];
      arr[i] = arr[j];
      arr[j] = tem;
      j++;
    }
    i++;
  }
  console.log("array", arr);
}

// left notation by 1 element
function leftRotationByOne(arr) {
  let firstEl = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstEl;
  console.log("Arr", arr);
}

// right notation by 1 element
function rightRotationByOne(arr) {
  let lastEl = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastEl;
  console.log("Arr", arr);
}

// left rotaton by k steps
function leftRotationByUserSteps(arr) {
  let prompt = require("prompt-sync")();
  let steps = +prompt("Please Enter the steps ");
  steps = steps % arr.length;
  for (let j = 0; j < steps; j++) {
    let firstEl = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstEl;
  }
  console.log("Arr", arr);
}
// with extra space
function leftRotationByUserStepWithExtraSpace(arr) {
  let prompt = require("prompt-sync")();
  let steps = +prompt("Please Enter the steps ");
  let n = arr.length;
  steps = steps % n;
  let tem = [];
  for (let i = 0; i < n; i++) {
    tem[i] = arr[(i + steps) % n];
  }
  console.log("Arr", tem);
}

// without extra space
function leftRotationByUserStepWithoutExtraSpace(arr) {
  let prompt = require("prompt-sync")();
  let steps = +prompt("Enter the steps ");
  steps = steps % arr.length;
  function reverse(i, j) {
    while (i < j) {
      let tem = arr[i];
      arr[i] = arr[j];
      arr[j] = tem;
      i++;
      j--;
    }
  }
  reverse(0, steps - 1);
  reverse(steps, arr.length - 1);
  reverse(0, arr.length - 1);
  console.log("Array", arr);
}

// remove Duplicates from sorted array

function removeDuplicates(nums) {
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }
  console.log("k =", j);
  console.log("nums =", nums);
  return j;
}

// merge two sorted array

function mergeTwoSortedArray(arr1, arr2) {
  let i = 0, j = 0, k = 0;
  let mergedArr = new Array(arr1.length + arr2.length);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr[k++] = arr1[i++];
    } else {
      mergedArr[k++] = arr2[j++];
    }
  }
  while (i < arr1.length) {
    mergedArr[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    mergedArr[k++] = arr2[j++];
  }
  console.log("merged array", mergedArr);
}
mergeTwoSortedArray([3, 5, 6], [1, 2, 4, 7, 9]);
