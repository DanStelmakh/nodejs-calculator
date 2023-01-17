const calculatorOOPStatic = require("./calculator");
const { numbers, operation } = require("./getData");

const calcApp = calculatorOOPStatic.start(operation, numbers);
console.log(calcApp);
module.exports = calcApp;
