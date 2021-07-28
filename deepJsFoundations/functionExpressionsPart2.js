// ## Instructions (Part 2)
//
// Now that you've completed Part 1, refactor to use **only** `=>` arrow functions.
//
// For `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)`, assign these arrow functions to variables of such names, so that the execution still works.
//
//     As the appeal of `=>` arrow functions is their conciseness, wherever possible try to use only expression bodies (`x => x.id`) instead of full function bodies (`x => { return x.id; }`).
// ********************************

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

const printRecords = recordIds => {
    let students = [];

    recordIds.forEach(studentId => {
        let studentFound;
        studentFound = studentRecords.find(student => {
            if (student.id == studentId) {
                return student;
            }
        });

        if (studentFound !== undefined) {
            students.push(studentFound);
        }
    });

    students.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }

        return 0;
    });

    students.forEach(student => {
        console.log(`${student.name} (${student.id}): ${student.paid ? 'Paid' : 'Not Paid'}`);
    });
}

const paidStudentsToEnroll = () => {
    let paidStudents = [];
    let paidButNotEnrolledStudents = [];

    paidStudents = studentRecords.filter(student => {
        return student.paid;
    });

    paidStudents.forEach(student => {
        let studentFound;

        studentFound = currentEnrollment.find(studentId => {
            return studentId == student.id;
        });

        if (studentFound === undefined) {
            paidButNotEnrolledStudents.push(student.id);
        }
    });

    return [...paidButNotEnrolledStudents, ...currentEnrollment];
}

const remindUnpaid = recordIds => {
    let unpaidStatusStudents = [];

    recordIds.forEach(studentId => {
        studentRecords.forEach(student => {
            if (studentId == student.id && !student.paid) {
                unpaidStatusStudents.push(student);
            }
        });
    });

    printRecords(unpaidStatusStudents.map(student => {
        return student.id;
    }));
}