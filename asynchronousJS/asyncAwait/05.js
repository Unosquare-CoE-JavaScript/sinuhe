let firstName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Steven");
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

(async function () {
    let names = await Promise.all([
        firstName(),
        lastName(),
        middleName(),
    ]);

    console.log(names[0], names[1], names[2],);
})();


