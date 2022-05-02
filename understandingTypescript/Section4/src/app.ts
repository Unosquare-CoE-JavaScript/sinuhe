// const userName = 'sinuhe';
// // userName = 'yair';
// let age = 27;
//
// age = 29;

// function add(n1: number, n2: number) {
//     let result;
//     result = n1 + n2;
//     return result;
// }

//
// if (age > 20) {
//     let isOld = true;
// }
//
// console.log(isOld);
//
// console.log(result);

// const add = (n1: number, n2: number = 0) => n1 + n2;

const printOut: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

// printOut(add(1));

const hobbies = ['dancing', 'eating'];
const activeHobbies = ['hiking'];
 activeHobbies.push(...hobbies);

 const person = {
     fistName: 'sinuhe',
     age: 27
 };

 const copiedPerson = {...person};

 const add = (...args: number[]) => {
     return args.reduce((currentResult, currentValue) => {
         return currentResult + currentValue;
     }, 0);
 };

const addedNumbers = add(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(addedNumbers);

// Destructuring

const [hobby1, hobby2] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { fistName: userName, age } = person;

console.log(userName, age, person);