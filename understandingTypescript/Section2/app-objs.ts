// const person: {
//     name: string;
//     age: number;
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Sinuhe',
//     age: 27,
//     hobbies: ['dancing', 'eating junk food'],
//     role: [2, 'author']
// };

// commonly used in JS:
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'Sinuhe',
    age: 27,
    hobbies: ['dancing', 'eating junk food'],
    role: Role.ADMIN
};

// // Push is an exception for Tuples
// person.role.push('admin');
// // Can't assign because is type string
// person.role[1] = 1;
// // Can't assign since it is a Tuple and we are assigning to a three values array
//  person.role = [0, 'admin', 'user'];

let favoriteActivities: any;
favoriteActivities = ['dancing'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log('Hobby', hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}