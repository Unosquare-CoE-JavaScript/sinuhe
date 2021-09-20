// function * genTest() {
//     let x = 0;
//     console.log('start');
//     yield x ++;
//     console.log(x);
//     x ++;
//     console.log(x);
//     yield x ++;
//     console.log('end');
//     return x;
// };
//
// let gen = genTest();
//

const test = function *test() {
    yield 10;
    yield 20;
    yield 30;
}


// const test = function *() {
//
// }

let it = test();
console.log('After code')