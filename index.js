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

// INR demonination
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
