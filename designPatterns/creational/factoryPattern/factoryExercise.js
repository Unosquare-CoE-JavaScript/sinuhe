class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toString() {
        return `${this.id}: ${this.name}`
    }
}

class PersonFactory {
    constructor() {
        this.counter = 0;
    }
    createPerson(name) {
        let person = new Person(this.counter, name);
        this.counter++;
        return person;
    }
}

let pf = new PersonFactory();
let p1 = pf.createPerson('Yon');
let p2 = pf.createPerson('Julia');

console.log(p1.toString());
console.log(p2.toString());
