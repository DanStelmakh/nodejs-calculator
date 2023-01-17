const { calc, operation, numbers } = require("./lib");

const res = calc(operation, numbers);
console.log(res);

module.exports = {
  calc,
  operation,
  numbers,
};
