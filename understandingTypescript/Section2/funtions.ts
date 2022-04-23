function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result', num);
}

function addHandle(n1: number, n2: number, callback: (param: number) => void) {
    const result = n1 + n2;
    callback(result);
}
printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

// not allowed 👇
// combineValues = printResult;

console.log(combineValues(2, 3));

addHandle(5, 5, (res) => {
    console.log('Result', res);
})