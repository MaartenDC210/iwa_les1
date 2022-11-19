console.log('hello world!')

const readLine = require("readline-sync")

const operationOptions = ['+', '-', '*', '/']
const number1 = readLine.questionFloat('give a number: ');
const number2 = readLine.questionFloat('give another number: ');
const operation = readLine.keyInSelect(operationOptions, 'give an operation: ');

const calculateInput = (var1, var2, operationSymbol) => {
    switch (operationSymbol) {
        case 0:
            return var1 + var2;
        case 1:
            return var1 - var2;
        case 2:
            return var1 * var2;
        case 3:
            return var1 / var2 
        default:
            console.log('Incorrect Operation given.')
            break;
    }
}

const result = calculateInput(number1,number2,operation);
console.log(result);

