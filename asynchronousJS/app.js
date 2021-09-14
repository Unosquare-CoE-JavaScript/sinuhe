"use strict";

const test = function() {
    setTimeout(function () {
        console.log('start');

        alert('Notice me!');

        console.log('End');
    }, 1000);
};

const test2 = function() {
    console.log('Now i get attention');
};

test();
test2();