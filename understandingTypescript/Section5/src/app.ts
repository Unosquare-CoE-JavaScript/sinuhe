class Department {
    // private name: string;
    // private employees: string[] = [];
    //
    // constructor(n: string) {
    //     this.name = n;
    // }

    //Shorthand to constructor
    protected employees: string[] = [];
    constructor(private readonly id: string, private name: string) {}

    describe(this: Department) {
        console.log(`Department: ${this.id} ${this.name}`);
    }

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
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string []) {
        super(id, 'Accounting');
    }

    addReports(text: string) {
        this.reports.push(text);
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
}

const accounting = new AccountingDepartment('id1', []);
accounting.addReports('Money stolen :C');
accounting.printReports();

console.log(accounting);

accounting.describe();

accounting.addEmployee('Yair');
accounting.addEmployee('Isaac');

accounting.describe();
accounting.addEmployee('Gomez');
accounting.addEmployee('Sinuhe');
accounting.printEmployeeInfo();

// 👇 employees is not accessible
// accounting.employees[0]

// const accountingCopy = { name: 'Sinuhe department', describe: accounting.describe };
//
// accountingCopy.describe();
