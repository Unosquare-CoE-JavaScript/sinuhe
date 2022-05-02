"use strict";
const printOut = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
const hobbies = ['dancing', 'eating'];
const activeHobbies = ['hiking'];
activeHobbies.push(...hobbies);
const person = {
    fistName: 'sinuhe',
    age: 27
};
const copiedPerson = Object.assign({}, person);
const add = (...args) => {
    return args.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const addedNumbers = add(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(addedNumbers);
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { fistName: userName, age } = person;
console.log(userName, age, person);
//# sourceMappingURL=app.js.map