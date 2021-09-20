let a = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("DONE");
    }, 4000);
});

a.then(function (val) {
    console.log(val);
}, function (val) {
    console.log('rejected' + val);
})

let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};

let setTimeoutP = function (time) {
    return new Promise(function (resolve, reject) {
        if (isNaN(time)) {
            reject('a numer is required')
        }
        setTimeout(resolve, time);
    });
}

setTimeoutP(2000).then(function () {
    console.log('Listo')
}).catch(function (err) {
    console.log(err);
})