const calculatorOOP = require("./Calculator_OOP");
const { numbers, operation } = require("./getData");

const calcApp = new calculatorOOP(operation, numbers).start();
console.log(calcApp);
module.exports = calcApp;
