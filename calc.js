// *Operations for calculator
// Sum
// Substraction
// Multiple
// Division
// *How it starts
// node calc.js sum 5 5 5 (15)
// node calc.js mult 2 2 2  (8)

// const argv = process.argv.slice(3);
const [, , operation, ...data] = process.argv;
const numbers = data.map((item) => Number(item));
// console.log(numbers);
// console.log(operation);

function calculate(operation, numbers) {
  let result = null;
  switch (operation) {
    case "sum":
      result = numbers.reduce((acc, number) => acc + number);
      break;
    case "sub":
      result = numbers.reduce((acc, number) => acc - number);
      break;
    case "mult":
      result = numbers.reduce((acc, number) => acc * number);
      break;
    case "div":
      result = numbers.reduce((acc, number) => acc / number);
      break;
    default:
      result = `Uknown operation type`;
      break;
  }
  return result;
}

const res = calculate(operation, numbers);
console.log(res);
