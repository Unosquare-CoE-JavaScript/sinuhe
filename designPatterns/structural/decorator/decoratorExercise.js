class Bird {
    constructor(age=0) {
        this.age = age;
    }

    fly() {
        return this.age < 10 ? 'flying' : 'too old';
    }
}

class Lizard {
    constructor(age=0) {
        this.age = age;
    }

    crawl() {
        return this.age > 1 ? 'crawling' : 'too young';
    }
}

class Dragon {
    constructor(age=0) {
        this.age = age;
        this.fly = new Bird(age).fly;
        this.crawl = new Lizard(age).crawl;
    }
}


























class Bird
{
    constructor(age=0)
    {
        this.age = age;
    }

    fly()
    {
        return this.age < 10 ? 'flying' : 'too old';
    }
}

class Lizard
{
    constructor(age=0)
    {
        this.age = age;
    }

    crawl()
    {
        return this.age > 1 ? 'crawling' : 'too young';
    }
}

class Dragon
{
    constructor(age=0)
    {
        // todo
        this.age = age;
        this.fly = new Bird(age).fly;
        this.crawl = new Lizard(age).crawl;
    }

    // todo: API members
}