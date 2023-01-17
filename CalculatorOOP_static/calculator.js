class CalculatorOOPStatic {
  static calculate(operation, numbers) {
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

  static start(operation, numbers) {
    return this.calculate(operation, numbers);
  }
}

module.exports = CalculatorOOPStatic;
