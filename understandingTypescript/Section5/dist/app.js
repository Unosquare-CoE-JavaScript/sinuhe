"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.id} ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
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
//# sourceMappingURL=app.js.map