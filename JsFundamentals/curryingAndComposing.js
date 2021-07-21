// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Emulate functionality of _.curry for up to 2 arguments
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const _ = {};

_.curry = function (func) {
    let argLength = arguments[0].length;
    const argsList = [];
    const curried = function (args) {
        argsList.push(args);
        if (argsList.length === argLength) {
            func(...argsList);
        } else {
            return curried;
        }
    }

    return curried;
}

// Video course solution
_.curry = (func) => {
    return (arg) => {
        return (arg2) => {
            return func(arg, arg2)
        }
    };
}


const abc = function (a, b) {
    return [a, b];
}
let curried = _.curry(abc);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Emulate functionality of _.compose for up to 2 arguments
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

_.compose = (func1, func2) => {
    return (arg) => {
        const result = func2(arg);
        return func1(result);
    };
};
