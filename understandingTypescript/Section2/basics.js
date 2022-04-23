function add(number1, number2, printResult, resultPhrase) {
    var result = number1 + number2;
    if (printResult) {
        console.log(resultPhrase + result);
    }
    else {
        return number1 + number2;
    }
}
var number1 = 3;
var number2 = 6;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
