console.log('------ Content from app-objs.ts file 🤓 ------');

type Combinable = number | string;
type ConversionDescriptor = 'number' | 'string';

function combine(input1: Combinable, input2: Combinable, resultType: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    // if (resultType === 'number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}

const combinedAges = combine(30, 26, 'number');
console.log(combinedAges);

const combinedAgesString = combine('30', '26', 'number');
console.log(combinedAgesString);

const combinedNamess = combine('Yair', 'Sinuhe', 'string');
console.log(combinedNamess);