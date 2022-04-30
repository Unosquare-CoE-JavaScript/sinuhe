"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT department', this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('Report not found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Enter valid data');
        }
        this.addReports(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee === 'Sinuhe') {
            return;
        }
        this.employees.push(employee);
    }
    describe() {
        console.log('Accounting department', this.id);
    }
}
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
const it = new ITDepartment('d8', ['Robert']);
it.name;
it.describe();
it.addEmployee('Gomez');
it.addEmployee('Sinuhe');
it.printEmployeeInfo();
//# sourceMappingURL=classesl.js.map