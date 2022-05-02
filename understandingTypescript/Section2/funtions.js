function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result', num);
}
function addHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// not allowed 👇
// combineValues = printResult;
console.log(combineValues(2, 3));
addHandle(5, 5, function (res) {
    console.log('Result', res);
});
