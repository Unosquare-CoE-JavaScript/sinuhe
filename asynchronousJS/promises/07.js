let firstName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Steven");
        }, 4000);
    });
};

let lastName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Hancock");
        }, 3000);
    });
};

let middleName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("W.");
        }, 7000);
    });
};

// a.then(function (val) {
//     console.log(val);
// }, function (val) {
//     console.log('rejected' + val);
// })


Promise.race([
    firstName(),
    lastName(),
    middleName(),
])
    .then(function (msg) {
        console.log(msg);
})
    .catch(err => console.log(err))

