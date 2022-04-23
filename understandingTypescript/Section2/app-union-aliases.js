console.log('------ Content from app-objs.ts file 🤓 ------');
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultType === 'number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}
var combinedAges = combine(30, 26, 'number');
console.log(combinedAges);
var combinedAgesString = combine('30', '26', 'number');
console.log(combinedAgesString);
var combinedNamess = combine('Yair', 'Sinuhe', 'string');
console.log(combinedNamess);
