// # Function Expressions
//
// In this exercise, you will be writing some functions and function expressions, to manage the student enrollment records for a workshop.
//
// **Note:** The spirit of this exercise is to use functions wherever possible and appropriate, so consider usage of array utilities `map(..)`, `filter(..)`, `find(..)`, `sort(..)`, and `forEach(..)`.
//
//     ## Instructions (Part 1)
//
// **Note:** In Part 1, use only function declarations or named function expressions.
//
// You are provided three functions stubs -- `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)` -- which you must define.
//
//     At the bottom of the file you will see these functions called, and a code comment indicating what the console output should be.
//
// 1. `printRecords(..)` should:
//     - take a list of student Ids
// - retrieve each student record by its student Id (hint: array `find(..)`)
// - sort by student name, ascending (hint: array `sort(..)`)
// - print each record to the console, including `name`, `id`, and `"Paid"` or `"Not Paid"` based on their paid status
//
// 2. `paidStudentsToEnroll()` should:
//     - look through all the student records, checking to see which ones are paid but **not yet enrolled**
// - collect these student Ids
// - return a new array including the previously enrolled student Ids as well as the to-be-enrolled student Ids (hint: spread `...`)
//
// 3. `remindUnpaid(..)` should:
//     - take a list of student Ids
// - filter this list of student Ids to only those whose records are in unpaid status
// - pass the filtered list to `printRecords(..)` to print the unpaid reminders
//
// ## Instructions (Part 2)

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
    { id: 313, name: "Frank", paid: true, },
    { id: 410, name: "Suzy", paid: true, },
    { id: 709, name: "Brian", paid: false, },
    { id: 105, name: "Henry", paid: false, },
    { id: 502, name: "Mary", paid: true, },
    { id: 664, name: "Bob", paid: false, },
    { id: 250, name: "Peter", paid: true, },
    { id: 375, name: "Sarah", paid: true, },
    { id: 867, name: "Greg", paid: false, },
];

function printRecords(recordIds) {
    let students = [];

    recordIds.forEach(function findStudent(studentId) {
        let studentFound;
        studentFound = studentRecords.find(function validateStudentId(student) {
            if (student.id == studentId) {
                return student;
            }
        });

        if (studentFound !== undefined) {
            students.push(studentFound);
        }
    });

    students.sort(function sortAB(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }

        return 0;
    });

    students.forEach(function printStudentName(student) {
        console.log(`${student.name} (${student.id}): ${student.paid ? 'Paid' : 'Not Paid'}`);
    });
}

function paidStudentsToEnroll() {
    let paidStudents = [];
    let paidButNotEnrolledStudents = [];

    paidStudents = studentRecords.filter(function isPaidStudent(student) {
        return student.paid;
    });

    paidStudents.forEach(function isEnrroled(student) {
        let studentFound;

        studentFound = currentEnrollment.find(function studentExists(studentId) {
            return studentId == student.id;
        });

        if (studentFound === undefined) {
            paidButNotEnrolledStudents.push(student.id);
        }
    });

    return [...paidButNotEnrolledStudents, ...currentEnrollment];
}

function remindUnpaid(recordIds) {
    let unpaidStatusStudents = [];

    recordIds.forEach(function findUnpaidStudents(studentId) {
        studentRecords.forEach(function isStudentPaid(student) {
            if (studentId == student.id && !student.paid) {
                unpaidStatusStudents.push(student);
            }
        });
    });

    printRecords(unpaidStatusStudents.map(function getStudentId(student) {
        return student.id;
    }));
}