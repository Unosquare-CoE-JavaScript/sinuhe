abstract class Department {
    // private name: string;
    // private employees: string[] = [];
    //
    // constructor(n: string) {
    //     this.name = n;
    // }

    //Shorthand to constructor
    protected employees: string[] = [];
    static fiscalYear = 2022;
    constructor(protected readonly id: string, public name: string) {}

    static createEmployee(name: string) {
        return { name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT department', this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('Report not found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Enter valid data');
        }
        this.addReports(value);
    }

    private constructor(id: string, private reports: string []) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(employee: string) {
        if (employee === 'Sinuhe') {
            return;
        }
        this.employees.push(employee);
    }

    describe() {
        console.log('Accounting department', this.id);
    }
}

// const accounting = new AccountingDepartment('id1', []);
// now accounting is created with singleton
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'First report';
accounting.addReports('Money stolen :C');
accounting.printReports();

console.log(accounting);

console.log('latest report:', accounting.mostRecentReport);

accounting.describe();

accounting.addEmployee('Yair');
accounting.addEmployee('Isaac');

const employee1 = Department.createEmployee('Romeo');
console.log(employee1, Department.fiscalYear);
// 👇 employees is not accessible
// accounting.employees[0]

// const accountingCopy = { name: 'Sinuhe department', describe: accounting.describe };
//
// accountingCopy.describe();

const it = new ITDepartment('d8', ['Robert']);

it.name
it.describe();
it.addEmployee('Gomez');
it.addEmployee('Sinuhe');
it.printEmployeeInfo();