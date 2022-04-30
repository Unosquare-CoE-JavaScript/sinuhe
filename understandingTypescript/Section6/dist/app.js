"use strict";
var _a, _b;
const e1 = {
    name: 'Sinuhe',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(employee) {
    console.log('name:', employee.name);
    if ('privileges' in employee) {
        console.log('privileges:', employee.privileges);
    }
    if ('startDate' in employee) {
        console.log('date:', employee.startDate);
    }
}
printEmployeeInformation({ name: 'Peter', startDate: new Date(), privileges: ['server'] });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...', amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(33);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed', speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 78 });
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi :)';
}
const error = {
    email: 'invalid',
    userName: 'Should not contain numbers',
    path: '/'
};
const fetchedDataFromAPI = {
    id: 'u1',
    name: 'Sinuhe',
    job: { title: 'Dev', description: 'develop stuff' }
};
console.log((_a = fetchedDataFromAPI === null || fetchedDataFromAPI === void 0 ? void 0 : fetchedDataFromAPI.job) === null || _a === void 0 ? void 0 : _a.title);
if (fetchedDataFromAPI.job && fetchedDataFromAPI.job.title) {
    console.log((_b = fetchedDataFromAPI === null || fetchedDataFromAPI === void 0 ? void 0 : fetchedDataFromAPI.job) === null || _b === void 0 ? void 0 : _b.title);
}
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map