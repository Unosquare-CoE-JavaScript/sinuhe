type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Sinuhe',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): number;
function add(a: number, b: string): number;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
    console.log('name:', employee.name);
    if ('privileges' in employee) {
        console.log('privileges:', employee.privileges);
    }

    if ('startDate' in employee) {
        console.log('date:', employee.startDate);
    }
}

printEmployeeInformation({ name: 'Peter', startDate: new Date(), privileges: ['server']});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...', amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(33);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({type: 'bird', flyingSpeed: 78});

// two ways of casting 👇
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi :)';
}

interface ErrorContainer { // this can have different props, like { email, username, ...}
    [prop: string]: string;
}

const error: ErrorContainer = {
    email: 'invalid',
    userName: 'Should not contain numbers',
    path: '/'
};

// Optional chaining

const fetchedDataFromAPI = {
    id: 'u1',
    name: 'Sinuhe',
    job: { title: 'Dev', description: 'develop stuff' }
};

console.log(fetchedDataFromAPI?.job?.title);

if (fetchedDataFromAPI.job && fetchedDataFromAPI.job.title) {
    console.log(fetchedDataFromAPI?.job?.title);
}

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);