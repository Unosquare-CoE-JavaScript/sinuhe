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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
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
var favoriteActivities;
favoriteActivities = ['dancing'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log('Hobby', hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
