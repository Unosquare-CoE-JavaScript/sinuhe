function add (number1: number, number2: number, printResult: boolean, resultPhrase: string) {
    const result = number1 + number2;

    if (printResult) {
        console.log(resultPhrase + result);
    } else {
        return number1 + number2;
    }
}

const number1 = 3;
const number2 = 6;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);