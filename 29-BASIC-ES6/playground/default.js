function sum(num1 = 10, num2 = 20) {
  return num1 + num2;
}

const total = sum(10);
console.log(total);


function multiply(num1, num2 = 1) {
    const total = num1 * num2;
    return total;
}

console.log(multiply(2));