class Person
{
    constructor(age=0)
    {
        this.age = age;
    }

    drink() { return 'drinking'; }
    drive() { return 'driving'; }
    drinkAndDrive() { return 'driving while drunk'; }
}

class ResponsiblePerson
{
    constructor(person)
    {
        this.person = person;
    }

    drink() {
        if (this.person.age > 18) {
            this.person.drink();
        } else {
            return 'too young'
        }
    }

    drive() {
        if (this.person.age > 16) {
            this.person.drive();
        } else {
            return 'too young'
        }
    }

    drinkAndDrive() {
        return 'dead';
    }
}












class Person
{
    constructor(age=0)
    {
        this.age = age;
    }

    drink() { return 'drinking'; }
    drive() { return 'driving'; }
    drinkAndDrive() { return 'driving while drunk'; }
}

class ResponsiblePerson
{
    constructor(person)
    {
        this.person = person;
    }
    // todo
    drink() {
        const { person } = this;
        if (person.age < 18) {
            return 'too young';
        }

        return person.drink();
    }

    drive() {
        const { person } = this;
        if (person.age < 16) {
            return 'too young';
        }
        return person.drive();
    }

    drinkAndDrive() {
        return 'dead';
    }
}