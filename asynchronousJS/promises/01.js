"use strict";

let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

// let asyncFunction2 = function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("asyncFunction2 is done.");
//         }, 3000);
//     });
// };
//
// asyncFunction()
//     .then(function(val) {
//     console.log("yaay", val)
//     return asyncFunction2();
// })
//     .then(function (val) {
//     console.log('second promise', val);
// });
//
// console.log("Te code is async")